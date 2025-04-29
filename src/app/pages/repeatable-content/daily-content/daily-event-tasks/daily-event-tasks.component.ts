import {Component, computed, inject} from '@angular/core';
import {DateTime} from 'luxon';
import {Accordion, AccordionContent, AccordionHeader, AccordionPanel} from 'primeng/accordion';
import {Button} from 'primeng/button';
import {HasResetPipe} from '../../../../pipes/has-reset.pipe';
import {TimeRemainingPipe} from '../../../../pipes/time-remaining.pipe';
import {OpenPanelsService} from '../../../../services/open-panels.service';
import {ResetTimeService} from '../../../../services/reset-time.service';
import {DailiesStore} from '../../../../stores/dailies-store';
import { Rarity } from '../../../../models/rarity';

@Component({
  selector: 'app-daily-event-tasks',
  imports: [
    Accordion,
    AccordionContent,
    AccordionHeader,
    AccordionPanel,
    Button,
    HasResetPipe,
    TimeRemainingPipe
  ],
  templateUrl: './daily-event-tasks.component.html',
  styleUrl: './daily-event-tasks.component.css'
})
export class DailyEventTasksComponent {
  private readonly dailiesStore = inject(DailiesStore);
  private readonly resetTimeService = inject(ResetTimeService);
  private readonly openPanelsService = inject(OpenPanelsService);

  public readonly Rarity = Rarity;

  public readonly completions = this.dailiesStore.completedTasks;

  public readonly eventTasks = computed(() => {
    const now = DateTime.now();
    const tasks = this.dailiesStore.eventTasks().filter(task => {
      const startDate = DateTime.fromISO(task.eventStartDate);
      const endDate = DateTime.fromISO(task.eventEndDate);
      return now >= startDate && now < endDate;
    });
    return tasks;
  });

  public readonly itemsPerTask = computed(() => {
    return this.eventTasks().map(task => task.items.length);
  });

  public readonly openPanels = this.openPanelsService.calculateOpenPanelsComputed(
    this.eventTasks,
    this.completions,
    this.itemsPerTask
  );

  completeItem(taskId: string) {
    this.dailiesStore.completeDaily(taskId);
  }
}
