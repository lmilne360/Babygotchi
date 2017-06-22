import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import { MdSnackBar } from "@angular/material";
import { RandomPickerService } from "app/random-picker.service";

const messages = ['You are evil!', 'I bow before you Dr Evil!', 'Satanaaaas!!', "Keepin' it real!", "Wow that was mean!",
                  "You have no shame!", "OMG reaaaallllly?" ];

@Component({
  selector: 'app-baby-control-room',
  templateUrl: './baby-control-room.component.html',
  styleUrls: ['./baby-control-room.component.scss']
})
export class BabyControlRoomComponent implements OnInit {
  babyId: string;

  constructor(private activatedRoute: ActivatedRoute,
              private firebaseApp: FirebaseApp,
              private mdSnackBar: MdSnackBar,
              private randomPicker: RandomPickerService) { }

  ngOnInit() {
    this.activatedRoute
        .parent
        .params
        .subscribe(
          p => this.babyId = p['id']
        );
  }

  babyHungry() {
    this.showMessage();
    const statRef = this.firebaseApp.database().ref(`/babies/${this.babyId}/hunger`);
    statRef.transaction(stat => stat + 10);
  }

  babyShitty() {
    this.showMessage();
    const statRef = this.firebaseApp.database().ref(`/babies/${this.babyId}/shittiness`);
    statRef.transaction(stat => stat + 10);
  }

  babySleepy() {
    this.showMessage();
    const statRef = this.firebaseApp.database().ref(`/babies/${this.babyId}/sleepiness`);
    statRef.transaction(stat => stat + 10);
  }

  showMessage() {
    this.mdSnackBar.open(this.randomPicker.pickAtRandom(messages), null, {duration: 3000});
  }
}