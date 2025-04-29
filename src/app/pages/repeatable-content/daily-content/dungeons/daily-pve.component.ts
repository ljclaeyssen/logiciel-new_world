import {NgClass} from '@angular/common';
import {Component, computed, inject} from '@angular/core';
import {Accordion, AccordionContent, AccordionHeader, AccordionPanel} from 'primeng/accordion';
import {Button} from 'primeng/button';
import {CustomOccurrenceLabelPipe} from '../../../../pipes/custom-occurence-label.pipe';
import {HasResetPipe} from '../../../../pipes/has-reset.pipe';
import {TimeRemainingPipe} from '../../../../pipes/time-remaining.pipe';
import {ResetTimeService} from '../../../../services/reset-time.service';
import { DailiesStore } from '../../../../stores/dailies-store';

@Component({
  selector: 'app-dungeons',
  imports: [
    HasResetPipe,
    TimeRemainingPipe,
    Accordion,
    AccordionPanel,
    AccordionHeader,
    AccordionContent,
    Button,
    CustomOccurrenceLabelPipe,
    NgClass
  ],
  templateUrl: './daily-pve.component.html',
  styleUrl: './daily-pve.component.css'
})
export class DailyPVEComponent {
  private readonly dailiesStore = inject(DailiesStore);
  private readonly resetTimeService = inject(ResetTimeService);

  public readonly completions = this.dailiesStore.completedTasks;

  public readonly dailyActivities = computed(() => {
    return this.dailiesStore.otherTasks().filter(activity =>
      ['Donjons aléatoires', 'Donjons mutés', 'Quêtes de faction'].includes(activity.name)
    );
  });

  public readonly openPanels = computed(() => {
    const activities = this.dailyActivities();
    const completed = this.completions();
    return activities
      .filter(activity => {
        for (let i = 1; i <= activity.amount; i++) {
          const taskId = `${activity.id}-${i}`;
          const lastCompletedDate = completed[taskId];
          if (!lastCompletedDate || !this.resetTimeService.isBeforeReset(lastCompletedDate, activity.refresh)) {
            console.log(`Activity ${activity.id}: Occurrence ${i} is available, opening panel`);
            return true;
          }
        }
        console.log(`Activity ${activity.id}: All occurrences are completed and locked, closing panel`);
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
      console.log(`Counting for ${taskId}: lastCompletedDate=${lastCompletedDate}`);
      if (lastCompletedDate) {
        const isBeforeReset = this.resetTimeService.isBeforeReset(lastCompletedDate, this.dailyActivities().find(activity => activity.id === activityId)!.refresh);
        console.log(`  isBeforeReset=${isBeforeReset}`);
        if (isBeforeReset) {
          count++;
        }
      }
    }
    console.log(`Activity ${activityId}: Completed occurrences=${count}/${totalOccurrences}`);
    return count;
  }

  completeOccurrence(taskId: string) {
    this.dailiesStore.completeDaily(taskId);
  }

  protected readonly Array = Array;
}
