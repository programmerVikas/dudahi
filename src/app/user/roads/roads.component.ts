import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'roads',
  templateUrl: './roads.component.html',
  styleUrls: ['./roads.component.css']
})
export class RoadsComponent implements OnInit {

  constructor() { }

  imgSrc1=[
    {src:"assets/img/WhatsApp Image 2020-12-26 at 8.17.08 AM.jpeg",title:"भगवती मंदिर सड़क"},
    {src:"assets/img/WhatsApp Image 2020-12-26 at 8.17.09 AM.jpeg",title:"भगवती मंदिर सड़क"},
    {src:"assets/img/IMG_20201223_170217.jpg",title:"चतरा स्कूल सड़क"},
    {src:"assets/img/IMG_20201223_170230.jpg",title:""},

  ];

  ngOnInit(): void {
  }

}
