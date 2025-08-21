import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../../services/booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-courier',
  templateUrl: './book-courier.component.html',
  styleUrl: './book-courier.component.css'
})

export class BookCourierComponent {
  bookingForm: FormGroup;
  submitted = false;
  confirmation: any = null;

  constructor(private fb: FormBuilder, private bookingService: BookingService, private Router: Router) {
    this.bookingForm = this.fb.group({
      senderName: ['', Validators.required],
      senderPhone: ['', [Validators.required, Validators.pattern(/^\+?\d{10,15}$/)]],
      senderAddress: ['', Validators.required],
      receiverName: ['', Validators.required],
      receiverPhone: ['', [Validators.required, Validators.pattern(/^\+?\d{10,15}$/)]],
      receiverAddress: ['', Validators.required],
      weight: ['', [Validators.required, Validators.pattern(/^(?!0\d)\d*(\.\d+)?$/), Validators.min(0.01)]],
      pickupDateTime: ['', Validators.required],
      price: [{ value: '', disabled: true }, Validators.required],
      bookingNo: [Math.floor(Math.random() * 1000).toString(), Validators.required]
    });

    this.bookingForm.get('weight')?.valueChanges.subscribe((val) => {
      const weight = parseFloat(val);
      if (!isNaN(weight) && weight > 0) {
        this.bookingForm.get('price')?.setValue((weight * 10).toFixed(2), { emitEvent: false });
      } else {
        this.bookingForm.get('price')?.setValue('', { emitEvent: false });
      }
    });
  }

  get f() { return this.bookingForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.bookingForm.invalid) return;
    const booking = {
      ...this.bookingForm.getRawValue(),
      price: this.bookingForm.get('price')?.value,

    };
    this.bookingService.addBooking(booking);
    this.confirmation = booking;
    this.bookingForm.reset();
    this.submitted = false;
  }

  newBooking() {
    this.confirmation = null;
  }

  close() {
    this.Router.navigate(['/home']);  }
}
