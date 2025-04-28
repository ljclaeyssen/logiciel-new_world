import {Task} from './task';

export interface EliteChestRun extends Task {
  globalLocalisationMapURI: string;
  regionalLocalisationMapURI: string;
  fastTravelPointName: string;
}
