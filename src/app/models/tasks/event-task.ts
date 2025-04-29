import { Task } from "./task";

export interface EventTask extends Task {
  items: { name: string; amount: number }[];
  eventStartDate: string; // Date de fin de l'événement (format ISO)
  eventEndDate: string; // Date de fin de l'événement (format ISO)
}
