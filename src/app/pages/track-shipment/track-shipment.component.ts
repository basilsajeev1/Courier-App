import { Component } from '@angular/core';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-track-shipment',
  templateUrl: './track-shipment.component.html',
  styleUrls: ['./track-shipment.component.css']
})
export class TrackShipmentComponent {
  trackingNumber: string = '';
  trackingDetails: any = null;
  submitted = false;
  shipments: any[] = [];

  constructor(private bookingService: BookingService) {
    this.loadShipments();
  }

  loadShipments() {
    this.bookingService.loadShipments().subscribe(data => {
      this.shipments = data;
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.shipments.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.shipments.length);
      this.trackingDetails = this.shipments[randomIndex];
    }
  }
}
