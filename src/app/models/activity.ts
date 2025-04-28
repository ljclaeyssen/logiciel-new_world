import {RefreshFrequency} from './refresh-frequency';
import {Task} from './task';

export interface Activity extends Task {
  amount: number;
  refresh: RefreshFrequency;
}
