import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customOccurrenceLabel'
})
export class CustomOccurrenceLabelPipe implements PipeTransform {

  transform(activityName: string, occurrence: number): string {
    switch (activityName) {
      case 'Donjons aléatoires':
        return `Donjon ${occurrence}`;
      case 'Donjons mutés aléatoires':
        return `Mutation ${occurrence}`;
      case 'Quêtes de faction':
        return `Quête ${occurrence}`;
      case 'Tuer 3 nommés':
        return `Nommé ${occurrence}`;
      default:
        return `Raid ${occurrence}`;
    }
  }

}
