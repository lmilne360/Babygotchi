import { Component, OnInit } from '@angular/core';
import { Baby } from 'app/baby';
@Component({
  selector: 'app-babies',
  templateUrl: './babies.component.html',
  styleUrls: ['./babies.component.scss']
})
export class BabiesComponent implements OnInit {
  babies = [new Baby('Lola'), new Baby('Toby')];
  constructor() { }

  ngOnInit() {
  }

}
