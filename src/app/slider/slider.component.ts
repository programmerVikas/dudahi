import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }
  
  slide1="assets/img/1608957091035.jpg"
  slide2="assets/img/child.jpeg"
  slide3="assets/img/new1.jpg"

  ngOnInit(): void {
  }

}
