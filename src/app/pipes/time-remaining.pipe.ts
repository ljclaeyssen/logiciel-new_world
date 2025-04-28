import {inject, Pipe, PipeTransform } from '@angular/core';
import {DateTime} from 'luxon';
import {RefreshFrequency} from '../models/refresh-frequency';
import {ResetTimeService} from '../services/reset-time.service';

@Pipe({
  name: 'timeRemaining'
})
export class TimeRemainingPipe implements PipeTransform {
  private readonly resetTimeService = inject(ResetTimeService);

  transform(
    lastCompletedDate: string | null,
    frequency: RefreshFrequency
  ): string {
    const nextReset = this.resetTimeService.getNextResetTime(frequency);
    const now = DateTime.now().setZone(nextReset.zoneName as string);

    if (lastCompletedDate && this.resetTimeService.isBeforeReset(lastCompletedDate, frequency)) {
      return `Activité terminée, prochain reset le ${nextReset.toFormat('dd/MM/yyyy')} à ${nextReset.toFormat('HH:mm')}`;
    }

    const diff = nextReset.diff(now).shiftTo('hours', 'minutes', 'seconds');

    if (diff.as('seconds') <= 0) {
      return '00:00:00';
    }

    return `${Math.floor(diff.hours).toString().padStart(2, '0')}:${Math.floor(diff.minutes).toString().padStart(2, '0')}:${Math.floor(diff.seconds).toString().padStart(2, '0')}`;
  }
}
