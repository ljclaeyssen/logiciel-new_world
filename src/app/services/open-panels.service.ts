import {computed, inject, Injectable} from '@angular/core';
import {ResetTimeService} from './reset-time.service';
import { Task } from '../models/tasks/task';

@Injectable({
  providedIn: 'root'
})
export class OpenPanelsService {
  private readonly resetTimeService = inject(ResetTimeService);

  public calculateOpenPanels(
    tasks: Task[],
    completions: { [taskId: string]: string },
    itemsPerTask?: number[]
  ): string[] {
    console.log(tasks)
    console.log(completions)
    console.log(itemsPerTask)
    return tasks
      .filter((task, taskIndex) => {
        const itemsCount = itemsPerTask ? itemsPerTask[taskIndex] : 1;
        for (let i = 0; i < itemsCount; i++) {
          const taskId = itemsCount > 1 ? `${task.id}-${i}` : task.id;
          console.log(taskId)
          const lastCompletedDate = completions[taskId];
          console.log('lastCompletedDate')
          console.log(lastCompletedDate)
          if (!lastCompletedDate || !this.resetTimeService.isBeforeReset(lastCompletedDate, task.refresh)) {
            return true;
          }
        }
        return false;
      })
      .map(task => task.id);
  }

  public calculateOpenPanelsComputed(
    tasks: () => Task[],
    completions: () => { [taskId: string]: string },
    itemsPerTask?: () => number[]
  ): ReturnType<typeof computed<string[]>> {
    return computed(() => {
      const tasksValue = tasks();
      const completionsValue = completions();
      const itemsCount = itemsPerTask ? itemsPerTask() : tasksValue.map(() => 1);
      return this.calculateOpenPanels(tasksValue, completionsValue, itemsCount);
    });
  }
}
