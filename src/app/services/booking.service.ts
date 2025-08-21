import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {


  constructor(private http: HttpClient) {}

  getBookings(): any[] {
    const data = localStorage.getItem('bookings');
    return data ? JSON.parse(data) : [];
  }

  loadShipments(): Observable<any[]> {
    return this.http.get<any[]>('assets/json/shipments.json');
  }

  addBooking(booking: any): void {
    const bookings = this.getBookings();
    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));
  }
}
