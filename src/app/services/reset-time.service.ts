import { Injectable } from '@angular/core';
import {DateTime} from 'luxon';
import {RefreshFrequency} from '../models/refresh-frequency';

@Injectable({
  providedIn: 'root'
})
export class ResetTimeService {

  private readonly RESET_HOUR_UTC: number = 4; // 4h00 UTC
  private readonly RESET_MINUTE: number = 0; // 00 minutes
  private readonly TIMEZONE: string = 'utc';

  private calculateNextResetTime(frequency: RefreshFrequency): DateTime {
    const now = DateTime.now().setZone(this.TIMEZONE);

    if (frequency === RefreshFrequency.DAILY) {
      let resetTime = now
        .startOf('day')
        .set({ hour: this.RESET_HOUR_UTC, minute: this.RESET_MINUTE });

      if (now > resetTime) {
        resetTime = resetTime.plus({ days: 1 });
      }
      return resetTime;
    } else if (frequency === RefreshFrequency.WEEKLY) {
      let resetTime = now
        .startOf('week')
        .plus({ days: 1 })
        .set({ hour: this.RESET_HOUR_UTC, minute: this.RESET_MINUTE });

      if (now > resetTime) {
        resetTime = resetTime.plus({ weeks: 1 });
      }
      return resetTime;
    }

    throw new Error('Unsupported refresh frequency');
  }

  getNextResetTime(frequency: RefreshFrequency): DateTime {
    return this.calculateNextResetTime(frequency);
  }

  isBeforeReset(date: string | DateTime, frequency: RefreshFrequency): boolean {
    const compareDate =
      typeof date === 'string'
        ? DateTime.fromISO(date, { zone: this.TIMEZONE })
        : date;
    const nextResetTime = this.calculateNextResetTime(frequency);
    return compareDate < nextResetTime;
  }

  hasResetOccurred(frequency: RefreshFrequency): boolean {
    const now = DateTime.now().setZone(this.TIMEZONE);
    const nextResetTime = this.calculateNextResetTime(frequency);
    return now > nextResetTime;
  }

  getTimezone(): string {
    return this.TIMEZONE;
  }
}
