import {NgClass} from '@angular/common';
import {Component, computed, inject} from '@angular/core';
import {DateTime} from 'luxon';
import {Accordion, AccordionContent, AccordionHeader, AccordionPanel} from 'primeng/accordion';
import {Button} from 'primeng/button';
import {Image} from 'primeng/image';
import { Rarity } from '../../../../models/rarity';
import {HasResetPipe} from '../../../../pipes/has-reset.pipe';
import {TimeRemainingPipe} from '../../../../pipes/time-remaining.pipe';
import {ResetTimeService} from '../../../../services/reset-time.service';
import {DailiesStore} from '../../../../stores/dailies-store';

@Component({
  selector: 'app-purchasables',
  imports: [
    Accordion,
    AccordionPanel,
    AccordionHeader,
    AccordionContent,
    HasResetPipe,
    TimeRemainingPipe,
    Button,
    NgClass,
    Image
  ],
  templateUrl: './daily-purchasables.component.html',
  styleUrl: './daily-purchasables.component.css'
})
export class DailyPurchasablesComponent {
  private readonly dailiesStore = inject(DailiesStore);
  private readonly resetTimeService = inject(ResetTimeService);

  public readonly Rarity = Rarity; // Exposer l'enum Rarity pour le template

  public readonly completions = this.dailiesStore.completedTasks;

  public readonly purchasableTasks = computed(() => {
    const tasks = this.dailiesStore.purchasableTasks();
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
    this.dailiesStore.completeDaily(taskId);
  }
}
