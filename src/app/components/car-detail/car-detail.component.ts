import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';

import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carImages:CarImage[]=[];
  cars:Car[]=[];
  imageBasePath  = environment.imageUrl;
  dataLoaded=false;

  constructor(private carService:CarService, 
    private carDetailSerice:CarDetailService,  
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
       this.getCarDetailsByCarId(params["carId"]),
       this.getImagesByCarId(params["carId"])
      }
     
    })
  }

  getImagesByCarId(carId:number){
    this.carDetailSerice.getCarImagesByCarId(carId).subscribe(response=>{
      this.carImages =response.data
      this.dataLoaded=true;
    })
  }

  getCarDetailsByCarId(carId:number){
    this.carService.getCarDetailsByCarId(carId).subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    })
  
  }

  getImagePath(image:string){
   return environment.apiUrl + image;
  }

}
