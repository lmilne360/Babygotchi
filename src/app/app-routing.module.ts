import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BabiesComponent } from 'app/babies/babies.component';

const routes: Routes = [
  {
    path: 'babies',
    children: [{
        path: '',
        component: BabiesComponent
    }],
  },
  {
      path: '**',
      redirectTo: 'babies'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }