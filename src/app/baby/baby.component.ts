import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';

import { Baby } from 'app/baby';

@Component({
  selector: 'app-baby',
  templateUrl: './baby.component.html',
  styleUrls: ['./baby.component.scss']
})
export class BabyComponent implements OnInit {
  baby: FirebaseObjectObservable<Baby>;

  constructor(private activatedRoute: ActivatedRoute,
              private db: AngularFireDatabase) { }

  ngOnInit() {
    this.activatedRoute
        .params
        .subscribe(
          p => {
            const key = p['id'];
            this.baby = this.db.object(`/babies/${key}`);
          }
        );
  }
}
