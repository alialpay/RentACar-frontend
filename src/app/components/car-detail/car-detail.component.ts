import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  car: CarDetailDto;
  carImages: CarImage[];
  urlPath:string="https://localhost:44326/images"
  constructor(
    private carDetailService: CarDetailService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarsById(params['carId']);
        this.getCarImages(params['carId']);
      }
    });
  }
  getCarsById(carId: number) {
    this.carDetailService.getDetailsByCarId(carId).subscribe((response) => {
      this.car = response.data[0];
    });
  }
  getCarImages(carId: number) {
    this.carDetailService.getCarImages(carId).subscribe((response) => {
      this.carImages = response.data;
    });
  }
}