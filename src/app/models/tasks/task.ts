import {Loot} from '../loot';
import {RefreshFrequency} from '../refresh-frequency';

export interface Task {
  id: string;
  name: string;
  description: string;
  refresh: RefreshFrequency;
  loot: Loot[];
  illustrationsURI?: string[];
}
