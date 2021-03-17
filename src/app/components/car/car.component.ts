import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car1 = { id: 1, brandName: 'Togg', colorName: 'Mavi', modelYear: 2003, description: 'Açıklama Yapılacak1' }
  car2 = { id: 2, brandName: 'Mercedes', colorName: 'Sarı', modelYear: 2003, description: 'Açıklama Yapılacak2' }
  car3 = { id: 3, brandName: 'Bmw', colorName: 'Yeşil', modelYear: 2003, description: 'Açıklama Yapılacak3' }
  car4 = { id: 4, brandName: 'Toyota', colorName: 'Kırmızı', modelYear: 2003, description: 'Açıklama Yapılacak4' }
  car5 = { id: 5, brandName: 'Fiat', colorName: 'Beyaz', modelYear: 2003, description: 'Açıklama Yapılacak5' }

  cars = [this.car1, this.car2, this.car3, this.car4, this.car5]

  constructor() { }

  ngOnInit(): void {
  }

}
