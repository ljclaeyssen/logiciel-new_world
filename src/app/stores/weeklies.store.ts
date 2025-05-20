import { inject } from '@angular/core';
import { signalStore, withState, withMethods, patchState, withComputed, withHooks } from '@ngrx/signals';
import eventTasksData from '../data/daily/daily-event-tasks.json';
import {RefreshFrequency} from '../models/refresh-frequency';
import {Activity} from '../models/tasks/activity';
import {EventTask} from '../models/tasks/event-task';
import {PurchasableTask} from '../models/tasks/purchasable-task';
import { LocalStorageService } from '../services/local-storage.service';
import { computed } from '@angular/core';
import weeklyTasksData from '../data/weekly/weekly-tasks.json';
import weeklyEventData from '../data/weekly/weekly-event-tasks.json';
import { Task } from '../models/tasks/task';

interface WeeklyCompletion {
  [taskId: string]: string; // taskId -> ISO date string
}

interface WeeklyState {
  weeklies: Task[];
  completions: WeeklyCompletion;
}

const weeklyTasks: Task[] = (weeklyTasksData as unknown) as Task[];
const eventTasks: EventTask[] = (weeklyEventData as unknown) as EventTask[];

const allTasks: Task[] = [
  ...weeklyTasks,
  ...eventTasks,
] as Task[];

const initialState: WeeklyState = {
  weeklies: allTasks.map(task => ({
    ...task,
    refresh: RefreshFrequency.WEEKLY,
  })),
  completions: {},
};

export const WeeklyStore = signalStore(
  withState(initialState),
  withComputed((store) => ({
    weeklies: computed(() => store.weeklies()),
    pveTasks: computed(() =>
      (store.weeklies() as Task[]).filter(
        (task): task is Activity => !('items' in task)
      )
    ),
    purchasableTasks: computed(() =>
      (store.weeklies() as Task[]).filter(
        (task): task is PurchasableTask => 'items' in task
      )
    ),
    eventTasks: computed(() =>
      (store.weeklies() as Task[]).filter(
        (task): task is EventTask => 'items' in task && 'eventEndDate' in task
      )
    ),
    completedTasks: computed(() => store.completions()),
  })),
  withMethods((store, localStorageService = inject(LocalStorageService)) => ({
    initializeCompletions() {
      const completions = localStorageService.load<WeeklyCompletion>('weeklyCompletions') || {};
      console.log('Initial weekly completions loaded:', completions);
      patchState(store, { completions });
    },

    completeWeekly(taskId: string) {
      const completionDate = new Date().toISOString();
      patchState(store, (state) => {
        const completions = {
          ...state.completions,
          [taskId]: completionDate,
        };
        console.log('Updated weekly completions:', completions);
        localStorageService.save('weeklyCompletions', completions);
        return { completions };
      });
    },

    resetCompletions() {
      patchState(store, () => {
        const completions = {};
        console.log('Resetting weekly completions:', completions);
        localStorageService.save('weeklyCompletions', completions);
        return { completions };
      });
    },
  })),
  withHooks({
    onInit(store) {
      store.initializeCompletions();
    },
  })
);
