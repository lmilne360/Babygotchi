import { Injectable } from '@angular/core';

@Injectable()
export class RandomPickerService {

  constructor() { }

  // pass in array of items and returns a random item from the array
  pickAtRandom(items: any[]) {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  }

}
