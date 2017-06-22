import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BabiesComponent } from './babies/babies.component';

/* Material Design and Flex Layout */

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

//Angular Fire
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth'

//Firebase config file
import { environment } from 'environments/environment';

/* Services */
import { RandomPickerService } from './random-picker.service';

@NgModule({
  declarations: [
    AppComponent,
    BabiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [RandomPickerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
