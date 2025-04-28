import {Component, computed, inject} from '@angular/core';
import {Accordion, AccordionContent, AccordionHeader, AccordionPanel, AccordionTab} from 'primeng/accordion';
import {ButtonDirective, ButtonIcon} from 'primeng/button';
import {EliteChestRun} from '../../../../models/elite-chest-run';
import {HasResetPipe} from '../../../../pipes/has-reset.pipe';
import {TimeRemainingPipe} from '../../../../pipes/time-remaining.pipe';
import {ResetTimeService} from '../../../../services/reset-time.service';
import {DailiesStore} from '../../../../stores/dailies-store';

@Component({
  selector: 'app-elite-chest-run',
  imports: [
    AccordionPanel,
    Accordion,
    AccordionHeader,
    ButtonDirective,
    ButtonIcon,
    HasResetPipe,
    TimeRemainingPipe,
    AccordionContent
  ],
  templateUrl: './elite-chest-run.component.html',
  styleUrl: './elite-chest-run.component.css'
})
export class EliteChestRunComponent {
  private readonly dailiesStore = inject(DailiesStore);
  private readonly resetTimeService = inject(ResetTimeService);

  public readonly completions = this.dailiesStore.completedTasks;

  public readonly eliteChestRuns = computed(() => this.dailiesStore.ecrTasks());

  public readonly openPanels = computed(() => {
    const runs = this.eliteChestRuns();
    const completed = this.completions();
    return runs
      .filter(run => {
        const lastCompletedDate = completed[run.id];
        return !lastCompletedDate || !this.resetTimeService.isBeforeReset(lastCompletedDate, run.refresh);
      })
      .map(run => run.id);
  });

  copyToClipboard(shortname: string) {
    navigator.clipboard.writeText(shortname).then(() => {
      console.log(`Shortname ${shortname} copié dans le presse-papiers !`);
    });
  }

  completeRun(taskId: string) {
    this.dailiesStore.completeDaily(taskId);
  }

}
