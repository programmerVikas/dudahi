import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'other-pic',
  templateUrl: './other-pic.component.html',
  styleUrls: ['./other-pic.component.css']
})
export class OtherPicComponent implements OnInit {

  constructor() { }

  imgSrc1=[
    {src:"assets/img/IMG_20201223_170919.jpg",title:"सामुदाय भवन"},
    {src:"assets/img/IMG_20201223_170913.jpg",title:"सामुदाय भवन"},
  ];


  ngOnInit(): void {
  }

}
