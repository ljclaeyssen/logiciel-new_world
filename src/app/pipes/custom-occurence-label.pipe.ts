import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customOccurrenceLabel'
})
export class CustomOccurrenceLabelPipe implements PipeTransform {

  transform(activityName: string, occurrence: number): string {
    switch (activityName) {
      case 'Donjons aléatoires':
        return `Donjon ${occurrence}`;
      case 'Donjons mutés':
        return `Mutation ${occurrence}`;
      case 'Quêtes de faction':
        return `Quête ${occurrence}`;
      default:
        return `Occurrence ${occurrence}`; // Fallback au cas où une nouvelle activité est ajoutée
    }
  }

}
