import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-recent-bookings',
  templateUrl: './recent-bookings.component.html',
  styleUrl: './recent-bookings.component.css'
})
export class RecentBookingsComponent implements OnInit {
  bookings: any[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.bookings = this.bookingService.getBookings().reverse();
  }
}
