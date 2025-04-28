import {computed, inject} from '@angular/core';
import {patchState, signalStore, withComputed, withHooks, withMethods, withState} from '@ngrx/signals';
import dayliesData from '../data/daylies.json';
import {Activity} from '../models/activity';
import {EliteChestRun} from '../models/elite-chest-run';
import {RefreshFrequency} from '../models/refresh-frequency';
import {Task} from '../models/task';
import {LocalStorageService} from '../services/local-storage.service';

export interface DailiesCompletion {
  [taskId: string]: string; // taskId -> ISO date string
}

interface DailiesState {
  dailies: Task[];
  completions: DailiesCompletion;
}

const initialState: DailiesState = {
  dailies: dayliesData.map(task => ({
    ...task,
    refresh: task.refresh === 'DAILY' ? RefreshFrequency.DAILY : RefreshFrequency.WEEKLY,
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
