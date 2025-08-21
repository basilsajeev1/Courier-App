import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookingService {

  getBookings(): any[] {
    const data = localStorage.getItem('bookings');
    return data ? JSON.parse(data) : [];
  }

  addBooking(booking: any): void {
    const bookings = this.getBookings();
    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));
  }
}
