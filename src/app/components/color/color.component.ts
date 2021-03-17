import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  color1 = { colorId: 1, colorName: 'Mavi' }
  color2 = { colorId: 2, colorName: 'Sarı' }
  color3 = { colorId: 3, colorName: 'Yeşil' }
  color4 = { colorId: 4, colorName: 'Kırmızı' }
  color5 = { colorId: 5, colorName: 'Beyaz' }

  colors = [this.color1, this.color2, this.color3, this.color4, this.color5]

  constructor() { }

  ngOnInit(): void {
  }

}
