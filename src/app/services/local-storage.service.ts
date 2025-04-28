import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  load<T>(key: string): T | null {
    const storedValue: string | null = localStorage.getItem(key);
    if (storedValue) {
      return JSON.parse(storedValue) as T;
    }
    return null;
  }

  save(key: string, toSave: any): void {
    localStorage.setItem(key, JSON.stringify(toSave));
  }
}
