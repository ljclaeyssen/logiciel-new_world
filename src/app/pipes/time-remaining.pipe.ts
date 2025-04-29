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
    const now = DateTime.now();

    if (lastCompletedDate && this.resetTimeService.isBeforeReset(lastCompletedDate, frequency)) {
      const lastCompletedDateTime = DateTime.fromISO(lastCompletedDate, { zone: this.resetTimeService.getTimezone() });
      const nextReset = this.resetTimeService.getNextResetTime(frequency, lastCompletedDateTime);
      if (now.hasSame(nextReset, 'day')) {
        return `Activité terminée, déverrouillée à ${nextReset.toFormat('HH:mm')}`;
      }

      if (nextReset.hasSame(now.plus({ days: 1 }), 'day')) {
        return `Activité terminée, déverrouillée demain`;
      }

      return `Activité terminée, déverrouillée le ${nextReset.toFormat('dddd DD/MM')}`;
    }

    const nextReset = this.resetTimeService.getNextResetTime(frequency, now);
    const nowInZone = now.setZone(nextReset.zoneName as string);

    const diff = nextReset.diff(nowInZone).shiftTo('hours', 'minutes', 'seconds');

    if (diff.as('seconds') <= 0) {
      return '00:00:00';
    }

    return `${Math.floor(diff.hours).toString().padStart(2, '0')}:${Math.floor(diff.minutes).toString().padStart(2, '0')}:${Math.floor(diff.seconds).toString().padStart(2, '0')}`;
  }
}

