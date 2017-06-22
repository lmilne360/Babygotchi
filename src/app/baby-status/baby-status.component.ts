import { Component, OnInit, Input } from '@angular/core';
import { Baby } from 'app/baby';

@Component({
  selector: 'app-baby-status',
  templateUrl: './baby-status.component.html',
  styleUrls: ['./baby-status.component.scss']
})
export class BabyStatusComponent implements OnInit {

@Input() baby: Baby;
  constructor() { }

  ngOnInit() {
  }

get status(): string {
    if (this.baby.life > 50) {
      return 'happy';
    } else if (this.baby.life > 25) {
      return 'sad';
    } else {
      return 'very sad';
    }
  }

}
