import { Component, OnInit } from '@angular/core';
import { Baby } from 'app/baby';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-babies',
  templateUrl: './babies.component.html',
  styleUrls: ['./babies.component.scss']
})
export class BabiesComponent implements OnInit {
  babies: FirebaseListObservable<Baby[]>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
  	this.babies = this.db.list('/babies');
  }

  //create new baby
  giveBirth(){
  	const newBaby = new Baby('Ali')
  	const babies = this.db.list('/babies')
  	// this saves the baby 
  	babies.push(newBaby)
  }

}
