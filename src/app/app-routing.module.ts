import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BabiesComponent } from 'app/babies/babies.component';
import { BabyComponent } from 'app/baby/baby.component';

const routes: Routes = [
  {
    path: 'babies',
    children: [
    {
        path: '',
        component: BabiesComponent,
    },
    // This is the new route!!!
    {
        path: ':id',
        component: BabyComponent,
        pathMatch: 'prefix'
    }
    ],
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