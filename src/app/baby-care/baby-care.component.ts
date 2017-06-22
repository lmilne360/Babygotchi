import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-baby-care',
  templateUrl: './baby-care.component.html',
  styleUrls: ['./baby-care.component.scss']
})
export class BabyCareComponent implements OnInit {
	babyId;

  constructor( private activatedRoute: ActivatedRoute,
  			   private firebaseApp: FirebaseApp) { }

  ngOnInit() {
  	this.activatedRoute
  		.parent
  		.params
  		.subscribe(
  			p => this.babyId = p['id']
  			);
  }

    feedBaby() {
    const statRef = this.firebaseApp.database().ref(`/babies/${this.babyId}/hunger`);
    statRef.transaction(stat => stat - 10 < 0 ? 0 : stat - 10);
  }

    cleanBaby() {
    const statRef = this.firebaseApp.database().ref(`/babies/${this.babyId}/shittiness`);
    statRef.transaction(stat => stat - 10 < 0 ? 0 : stat - 10);
  }

  sleepBaby() {
    const statRef = this.firebaseApp.database().ref(`/babies/${this.babyId}/sleepiness`);
    statRef.transaction(stat => stat - 10 < 0 ? 0 : stat - 10);
  }

  cuddleBaby() {
    const statRef = this.firebaseApp.database().ref(`/babies/${this.babyId}`);
    statRef.transaction(baby => {
      if (baby) {
        baby.hunger = this.getDecreasedStat({statGetter: () => baby.hunger, modifier: 10});
        baby.shittiness = this.getDecreasedStat({statGetter: () => baby.shittiness, modifier: 10});
        baby.sleepiness = this.getDecreasedStat({statGetter: () => baby.sleepiness, modifier: 10});
        baby.life = this.getIncreasedStat({statGetter: () => baby.life, modifier: 1});
      }
      return baby;
    });
  }

  getDecreasedStat({statGetter, modifier}) {
    return statGetter() > modifier ? statGetter() - modifier : 0;
  }
  getIncreasedStat({statGetter, modifier}) {
    return statGetter() + modifier > 100 ? 100 : statGetter() + modifier;
  }


}
