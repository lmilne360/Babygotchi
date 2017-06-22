import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BabiesComponent } from 'app/babies/babies.component';
import { BabyComponent } from 'app/baby/baby.component';
import { BabyCareComponent } from 'app/baby-care/baby-care.component';
import { BabyControlRoomComponent } from 'app/baby-control-room/baby-control-room.component';

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
        children: [
        {
          path: 'care',
          component: BabyCareComponent,
        },
        {
            path: 'control',
            component: BabyControlRoomComponent
        }
        ]
    }
    ],
  },
{
      path: '',
      pathMatch: 'full',
      redirectTo: 'babies'
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