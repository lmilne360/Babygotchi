import { Component, OnInit } from '@angular/core';
import { Baby } from 'app/baby';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { RandomPickerService } from 'app/random-picker.service';


@Component({
  selector: 'app-babies',
  templateUrl: './babies.component.html',
  styleUrls: ['./babies.component.scss']
})
export class BabiesComponent implements OnInit {
  babies: FirebaseListObservable<Baby[]>;

  constructor(private db: AngularFireDatabase, private randomService: RandomPickerService) { }

  ngOnInit() {
  	this.babies = this.db.list('/babies');
  }

  // create new baby
  giveBirth() {
  	const newBaby = new Baby(this.pickRandomName());
  	const babies = this.db.list('/babies');
  	// this saves the baby
  	babies.push(newBaby);
  }

  pickRandomName() {
    const names = ['Samira2', 'Ali', 'Toby', 'Tobina', 'Shishimba', 'Tuki', 'Laurentjr',
     'DonkeyKong', 'Carlos', 'Laura', 'John', 'Augustina', 'Manuel', 'Lola', 'Isaac', 'Georgina',
      'Paolo', 'Maria', 'Ronaldo', 'Ronalda'];
  	return this.randomService.pickAtRandom(names);
  }

}
