import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BookCourierComponent } from './pages/book-courier/book-courier.component';
import { TrackShipmentComponent } from './pages/track-shipment/track-shipment.component';
import { RecentBookingsComponent } from './pages/recent-bookings/recent-bookings.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'book', component: BookCourierComponent },
  { path: 'track', component: TrackShipmentComponent},
  { path: 'recent', component: RecentBookingsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
