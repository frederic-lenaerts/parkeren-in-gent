import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParkingDetailsComponent } from './parking-details/parking-details.component';
import { ParkingListComponent } from './parking-list/parking-list.component';

const routes: Routes = [
  { path: 'parkings', component: ParkingListComponent },
  { path: 'parking/:id', component: ParkingDetailsComponent },
  { path: '', redirectTo: '/parkings', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
