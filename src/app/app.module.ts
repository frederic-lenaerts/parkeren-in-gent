import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParkingDetailsComponent } from './parking-details/parking-details.component';
import { ParkingListComponent } from './parking-list/parking-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ParkingListComponent,
    ParkingDetailsComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
