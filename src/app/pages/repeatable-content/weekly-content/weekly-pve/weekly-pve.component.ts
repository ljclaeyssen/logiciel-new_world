import {NgClass} from '@angular/common';
import {Component, computed, inject} from '@angular/core';
import {Accordion, AccordionContent, AccordionHeader, AccordionPanel} from 'primeng/accordion';
import {Button} from 'primeng/button';
import {Image} from 'primeng/image';
import {RefreshFrequency} from '../../../../models/refresh-frequency';
import {Activity} from '../../../../models/tasks/activity';
import {CustomOccurrenceLabelPipe} from '../../../../pipes/custom-occurence-label.pipe';
import {HasResetPipe} from '../../../../pipes/has-reset.pipe';
import {TimeRemainingPipe} from '../../../../pipes/time-remaining.pipe';
import {OpenPanelsService} from '../../../../services/open-panels.service';
import {ResetTimeService} from '../../../../services/reset-time.service';
import {WeeklyStore} from '../../../../stores/weeklies.store';

@Component({
  selector: 'app-weekly-pve',
  imports: [
    Accordion,
    AccordionContent,
    AccordionHeader,
    AccordionPanel,
    Button,
    CustomOccurrenceLabelPipe,
    HasResetPipe,
    Image,
    TimeRemainingPipe,
    NgClass
  ],
  templateUrl: './weekly-pve.component.html',
  styleUrl: './weekly-pve.component.css'
})
export class WeeklyPveComponent {
  private readonly weeklyStore = inject(WeeklyStore);
  private readonly resetTimeService = inject(ResetTimeService);

  public readonly completions = this.weeklyStore.completedTasks;

  public readonly pveTasks = computed(() => this.weeklyStore.pveTasks() as Activity[]);
  public readonly pveItemsPerTask = computed(() => this.pveTasks().map(task => task.amount));

  public readonly openPanels = computed(() => {
    const activities = this.pveTasks();
    const completed = this.completions();
    return activities
      .filter(activity => {
        for (let i = 1; i <= activity.amount; i++) {
          const taskId = `${activity.id}-${i}`;
          const lastCompletedDate = completed[taskId];
          if (!lastCompletedDate || !this.resetTimeService.isBeforeReset(lastCompletedDate, activity.refresh)) {
            return true;
          }
        }
        return false;
      })
      .map(activity => activity.id);
  });

  countCompletedOccurrences(activityId: string, totalOccurrences: number): number {
    const completed = this.completions();
    let count = 0;
    for (let i = 1; i <= totalOccurrences; i++) {
      const taskId = `${activityId}-${i}`;
      const lastCompletedDate = completed[taskId];
      if (lastCompletedDate) {
        const isBeforeReset = this.resetTimeService.isBeforeReset(lastCompletedDate, this.pveTasks().find(activity => activity.id === activityId)!.refresh);
        if (isBeforeReset) {
          count++;
        }
      }
    }
    return count;
  }

  completeTask(taskId: string) {
    this.weeklyStore.completeWeekly(taskId);
  }

  protected readonly Array = Array;
}
