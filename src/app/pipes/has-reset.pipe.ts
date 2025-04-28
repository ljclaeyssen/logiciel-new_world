import {inject, Pipe, PipeTransform} from '@angular/core';
import {DateTime} from 'luxon';
import {RefreshFrequency} from '../models/refresh-frequency';
import {ResetTimeService} from '../services/reset-time.service';

@Pipe({
  name: 'hasReset'
})
export class HasResetPipe implements PipeTransform {

  private readonly resetTimeService = inject(ResetTimeService);


  transform(
    lastCompletedDate: string | null,
    frequency: RefreshFrequency
  ): boolean {
    if (!lastCompletedDate) {
      return true;
    }

    const compareDate = DateTime.fromISO(lastCompletedDate, { zone: this.resetTimeService.getTimezone() });
    const nextResetTime = this.resetTimeService.getNextResetTime(frequency);
    return !this.resetTimeService.isBeforeReset(lastCompletedDate, frequency);
  }

}
