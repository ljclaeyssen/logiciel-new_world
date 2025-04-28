import {Task} from './task';

export interface EliteChestRun extends Task {
  shortname: string;
  globalLocalisationMapURI: string;
  regionalLocalisationMapURI: string;
  fastTravelPointName: string;
}
