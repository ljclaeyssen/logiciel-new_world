import {computed, inject} from '@angular/core';
import {patchState, signalStore, withComputed, withHooks, withMethods, withState} from '@ngrx/signals';
import eventTasksData from '../data/daily-event-tasks.json';
import dailyTasksData from '../data/daily-tasks.json';


import ecrTasksData from '../data/ecr-tasks.json';
import {RefreshFrequency} from '../models/refresh-frequency';
import {Activity} from '../models/tasks/activity';
import {EliteChestRun} from '../models/tasks/elite-chest-run';
import {EventTask} from '../models/tasks/event-task';
import {PurchasableTask} from '../models/tasks/purchasable-task';
import {Task} from '../models/tasks/task';
import {LocalStorageService} from '../services/local-storage.service';

const ecrTasks: EliteChestRun[] = (ecrTasksData as unknown) as EliteChestRun[];
const eventTasks: EventTask[] = (eventTasksData as unknown) as EventTask[];
const dailyTasks: Task[] = (dailyTasksData as unknown) as Task[];

const allTasks: Task[] = [
  ...ecrTasks,
  ...eventTasks,
  ...dailyTasks
] as Task[];

export interface DailiesCompletion {
  [taskId: string]: string; // taskId -> ISO date string
}

interface DailiesState {
  dailies: Task[];
  completions: DailiesCompletion;
}

const initialState: DailiesState = {
  dailies: allTasks.map(task => ({
    ...task,
    refresh: RefreshFrequency.DAILY,
  })),
  completions: {},
};

export const DailiesStore = signalStore(
  withState(initialState),
  withComputed((store) => ({
    dailies: computed(() => store.dailies),
    ecrTasks: computed(() =>
      (store.dailies() as Task[]).filter(
        (task): task is EliteChestRun => 'shortname' in task
      )
    ),
    otherTasks: computed(() =>
      (store.dailies() as Task[]).filter(
        (task): task is Activity => !('shortname' in task)
      )
    ),
    purchasableTasks: computed(() =>
      (store.dailies() as Task[]).filter(
        (task): task is PurchasableTask => 'items' in task && !('eventEndDate' in task)
      )
    ),
    eventTasks: computed(() =>
      (store.dailies() as Task[]).filter(
        (task): task is EventTask => 'items' in task && 'eventEndDate' in task
      )
    ),
    completedTasks: computed(() => store.completions()),
  })),
  withMethods((store, localStorageService = inject(LocalStorageService)) => ({
    initializeCompletions() {
      const completions = localStorageService.load<DailiesCompletion>('dailiesCompletions') || {};
      patchState(store, { completions });
    },

    completeDaily(taskId: string) {
      const completionDate = new Date().toISOString();
      patchState(store, (state) => {
        const completions = {
          ...state.completions,
          [taskId]: completionDate,
        };
        localStorageService.save('dailiesCompletions', completions);
        return { completions };
      });
    },

    resetCompletions() {
      patchState(store, () => {
        const completions = {};
        localStorageService.save('dailiesCompletions', completions);
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
