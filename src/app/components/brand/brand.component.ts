import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brand1={brandId:1, brandName:"Togg"}
  brand2={brandId:2, brandName:"Mercedes"}
  brand3={brandId:3, brandName:"Bmw"}
  brand4={brandId:4, brandName:"Toyota"}
  brand5={brandId:5, brandName:"Fiat"}

  brands=[this.brand1,this.brand2,this.brand3,this.brand4,this.brand5]
  
  constructor() { }

  ngOnInit(): void {
  }

}
