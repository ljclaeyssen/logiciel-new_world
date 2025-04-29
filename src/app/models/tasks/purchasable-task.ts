import { Rarity } from "../rarity";
import { Task } from "./task";

export interface PurchasableTask extends Task{
  items: PurchasableItem[];
}

export interface PurchasableItem {
  name: string;
  rarity: Rarity;
}
