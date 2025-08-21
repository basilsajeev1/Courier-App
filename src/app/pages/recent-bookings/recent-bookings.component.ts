import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-recent-bookings',
  templateUrl: './recent-bookings.component.html',
  styleUrl: './recent-bookings.component.css'
})
export class RecentBookingsComponent implements OnInit {
  bookings: any[] = [];
  filteredBookings: any[] = [];
  searchTerm: string = '';

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.bookings = this.bookingService.getBookings().reverse();
    this.filteredBookings = this.bookings;
  }

  filterBookings() {
    const term = this.searchTerm.toLowerCase();
    this.filteredBookings = this.bookings.filter(b =>
      b.senderName.toLowerCase().includes(term) ||
      b.senderPhone.toLowerCase().includes(term) ||
      b.receiverName.toLowerCase().includes(term) ||
      b.receiverPhone.toLowerCase().includes(term) ||
      b.weight.toString().includes(term) ||
      b.price.toString().includes(term)     );
  }
}
