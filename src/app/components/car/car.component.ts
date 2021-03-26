import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: Car[] = []
  carImages: CarImage[]=[];
  apiUrl : string = "https://localhost:44326";
  dataLoaded = false

  constructor(private carService: CarService, private carDetailService:CarDetailService, private activatedRoute:ActivatedRoute) { }    // ActivatedRoute built-in bir angular servisi

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }
      else{
        this.getCars()
      }
    })
  }

  getCars() {
    this.carService.getCars().subscribe(response => {
      this.cars = response.data
      this.dataLoaded = true
    })
  }

  getCarsByBrand(brandId:number) {
    this.carService.getCarsByBrandId(brandId).subscribe(response => {
      this.cars = response.data
      this.dataLoaded = true
    })
  }
  getCarsByColor(colorId:number) {
    this.carService.getCarsByColorId(colorId).subscribe(response => {
      this.cars = response.data
      this.dataLoaded = true
    })
  }
  
}
