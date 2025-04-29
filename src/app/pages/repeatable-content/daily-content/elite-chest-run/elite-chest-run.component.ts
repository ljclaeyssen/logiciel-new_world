import {Component, computed, inject} from '@angular/core';
import {Accordion, AccordionContent, AccordionHeader, AccordionPanel} from 'primeng/accordion';
import {MessageService} from 'primeng/api';
import {Button} from 'primeng/button';
import {HasResetPipe} from '../../../../pipes/has-reset.pipe';
import {TimeRemainingPipe} from '../../../../pipes/time-remaining.pipe';
import {OpenPanelsService} from '../../../../services/open-panels.service';
import {DailiesStore} from '../../../../stores/dailies-store';

@Component({
  selector: 'app-elite-chest-run',
  imports: [
    AccordionPanel,
    Accordion,
    AccordionHeader,
    HasResetPipe,
    TimeRemainingPipe,
    AccordionContent,
    Button
  ],
  templateUrl: './elite-chest-run.component.html',
  styleUrl: './elite-chest-run.component.css'
})
export class EliteChestRunComponent {
  private readonly dailiesStore = inject(DailiesStore);
  private readonly messageService =  inject(MessageService);
  private readonly openPanelsService = inject(OpenPanelsService);

  public readonly completions = this.dailiesStore.completedTasks;

  public readonly eliteChestRuns = computed(() => this.dailiesStore.ecrTasks());

  public readonly openPanels = this.openPanelsService.calculateOpenPanelsComputed(
    this.eliteChestRuns,
    this.completions
  );

  copyToClipboard(shortname: string) {
    navigator.clipboard.writeText(`+ ${shortname}`).then(() => {
      this.messageService.add({ severity: 'info', summary: `+ ${shortname}`, detail: `"+ ${shortname}" a été copié dans votre presse-papier ! `, life: 3000 });
    });
  }

  completeRun(taskId: string) {
    this.dailiesStore.completeDaily(taskId);
  }

}
