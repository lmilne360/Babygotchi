import { Component, OnInit} from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { ActivatedRoute } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { RandomPickerService } from 'app/random-picker.service';

const messages = ['Awesome Dad!', 'You rock Buddy!', 'Hell yeah!', 'Good job!!', 'Saaaavyyy', 'Dad of the Year!',
  'Go get a beer, you deserve it!', 'Sweeeet!'];

@Component({
  selector: 'app-baby-care',
  templateUrl: './baby-care.component.html',
  styleUrls: ['./baby-care.component.scss']
})
export class BabyCareComponent implements OnInit {
  babyId;

  constructor(private activatedRoute: ActivatedRoute,
    private firebaseApp: FirebaseApp,
    private mdSnackBar: MdSnackBar,
    private randomPicker: RandomPickerService) { }

  adjustLife() {
    const babeRef = this.firebaseApp.database().ref(`/babies/${this.babyId}`);
    babeRef.transaction(baby => {
      baby.life = (100 - Math.round((baby.hunger + baby.shittiness + baby.sleepiness) / 3));
      return baby;
    });
  }

  ngOnInit() {
    this.activatedRoute
      .parent
      .params
      .subscribe(
      p => this.babyId = p['id']
      );
  }

  feedBaby() {
    this.showMessage();
    const statRef = this.firebaseApp.database().ref(`/babies/${this.babyId}/hunger`);
    statRef.transaction(stat => stat - 10 < 0 ? 0 : stat - 10);
    this.adjustLife();
  }

  cleanBaby() {
    this.showMessage();
    const statRef = this.firebaseApp.database().ref(`/babies/${this.babyId}/shittiness`);
    statRef.transaction(stat => stat - 10 < 0 ? 0 : stat - 10);
    this.adjustLife();
  }

  sleepBaby() {
    this.showMessage();
    const statRef = this.firebaseApp.database().ref(`/babies/${this.babyId}/sleepiness`);
    statRef.transaction(stat => stat - 10 < 0 ? 0 : stat - 10);
    this.adjustLife();
  }

  cuddleBaby() {
    this.showMessage();
    const statRef = this.firebaseApp.database().ref(`/babies/${this.babyId}`);
    statRef.transaction(baby => {
      if (baby) {
        baby.hunger = this.getDecreasedStat({ statGetter: () => baby.hunger, modifier: 10 });
        baby.shittiness = this.getDecreasedStat({ statGetter: () => baby.shittiness, modifier: 10 });
        baby.sleepiness = this.getDecreasedStat({ statGetter: () => baby.sleepiness, modifier: 10 });
        baby.life = this.getIncreasedStat({ statGetter: () => baby.life, modifier: 1 });
      }
      return baby;
    });
  }

  getDecreasedStat({ statGetter, modifier }) {
    return statGetter() > modifier ? statGetter() - modifier : 0;
  }
  getIncreasedStat({ statGetter, modifier }) {
    return statGetter() + modifier > 100 ? 100 : statGetter() + modifier;
  }

  showMessage() {
    this.mdSnackBar.open(this.randomPicker.pickAtRandom(messages), null, { duration: 3000 });
  }


}
