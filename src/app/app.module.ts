import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NavigationModule} from './navigation/navigation.module';
import {HomeModule} from './home/home.module';
import {ReservationModule} from './reservation/reservation.module';
import {DescriptionModule} from './description/description.module';
import {JohnModule} from './john/john.module';
import {ScrollNavModule} from './scroll-navigation/scrollnav.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NavigationModule,
    HomeModule,
    ReservationModule,
    DescriptionModule,
    JohnModule,
    ScrollNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
