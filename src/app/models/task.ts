import {Loot} from './loot';

export interface Task {
  id: string;
  name: string;
  description: string;
  loot: Loot[];
}
