import {NgClass} from '@angular/common';
import {Component, computed, inject} from '@angular/core';
import {Accordion, AccordionContent, AccordionHeader, AccordionPanel} from 'primeng/accordion';
import {Button} from 'primeng/button';
import {Image} from 'primeng/image';
import {HasResetPipe} from '../../../../pipes/has-reset.pipe';
import {TimeRemainingPipe} from '../../../../pipes/time-remaining.pipe';
import {ResetTimeService} from '../../../../services/reset-time.service';
import {DailiesStore} from '../../../../stores/dailies-store';
import {WeeklyStore} from '../../../../stores/weeklies.store';
import { Rarity } from '../../../../models/rarity';

@Component({
  selector: 'app-weekly-purchasables',
  imports: [
    Accordion,
    AccordionContent,
    AccordionHeader,
    AccordionPanel,
    Button,
    HasResetPipe,
    Image,
    TimeRemainingPipe,
    NgClass
  ],
  templateUrl: './weekly-purchasables.component.html',
  styleUrl: './weekly-purchasables.component.css'
})
export class WeeklyPurchasablesComponent {
  private readonly weeklyStore = inject(WeeklyStore);
  private readonly resetTimeService = inject(ResetTimeService);

  public readonly Rarity = Rarity;

  public readonly completions = this.weeklyStore.completedTasks;

  public readonly purchasableTasks = computed(() => {
    const tasks = this.weeklyStore.purchasableTasks();
    return tasks;
  });

  public readonly openPanels = computed(() => {
    const purchasableTasks = this.purchasableTasks();
    const completed = this.completions();

    return purchasableTasks
      .filter(task => {
        for (let i = 0; i < task.items.length; i++) {
          const taskId = `${task.id}-${i}`;
          const lastCompletedDate = completed[taskId];
          if (!lastCompletedDate || !this.resetTimeService.isBeforeReset(lastCompletedDate, task.refresh)) {
            return true;
          }
        }
        return false;
      })
      .map(task => task.id);
  });

  completeItem(taskId: string) {
    this.weeklyStore.completeWeekly(taskId);
  }
}
