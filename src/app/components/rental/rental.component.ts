import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rental1 = { id: 1, brandName: 'Bmw', firstName: 'Ali', lastName: 'Alpay', rentalDate: '23.03.2021', returnDate: '24.04.2021' }
  rental2 = { id: 2, brandName: 'Togg', firstName: 'Ali', lastName: 'Alpay', rentalDate: '23.03.2021', returnDate: '24.04.2021' }

  rentals = [this.rental1, this.rental2]

  constructor() { }

  ngOnInit(): void {
  }

}
