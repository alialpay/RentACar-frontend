import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer1 = { id: 1, userId: 1, companyName: 'Seha' }
  customer2 = { id: 2, userId: 2, companyName: 'Mochka' }
  customer3 = { id: 3, userId: 3, companyName: 'Algida' }

  customers = [this.customer1, this.customer2, this.customer3]

  constructor() { }

  ngOnInit(): void {
  }

}
