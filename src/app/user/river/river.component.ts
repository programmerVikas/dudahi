import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'river',
  templateUrl: './river.component.html',
  styleUrls: ['./river.component.css']
})
export class RiverComponent implements OnInit {

  constructor() { }

  imgSrc1=[
    {src:"assets/img/IMG_20201223_165959.jpg",title:"चतरा पोखर"},
    {src:"assets/img/IMG_20201223_170128.jpg",title:"चतरा पोखर"},
    {src:"assets/img/PANO_20201223_163928.jpg",title:"राम जानकी मंदिर पोखर (तालाब)"},
  ];

  ngOnInit(): void {
  }

}
