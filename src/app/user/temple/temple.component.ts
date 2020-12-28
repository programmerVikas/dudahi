import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'temple',
  templateUrl: './temple.component.html',
  styleUrls: ['./temple.component.css']
})
export class TempleComponent implements OnInit {

  constructor() { }

imgSrc1=[
  {src:"assets/img/maa-kali.jpg",title:"माँ भगवती मंदिर"},
  {src:"assets/img/WhatsApp Image 2020-12-25 at 3.47.04 PM (1).jpeg",title:""},
  {src:"assets/img/WhatsApp Image 2020-12-25 at 3.47.04 PM (2).jpeg",title:""},
  {src:"assets/img/WhatsApp Image 2020-12-25 at 3.47.04 PM (3).jpeg",title:""},
  {src:"assets/img/WhatsApp Image 2020-12-25 at 3.47.04 PM (4).jpeg",title:""},
  {src:"assets/img/WhatsApp Image 2020-12-25 at 3.47.04 PM.jpeg",title:""},
  {src:"assets/img/IMG_20201223_165050.jpg",title:"महाबली हनुमान मंदिर"},
  {src:"assets/img/IMG_20201223_165134.jpg",title:""},
  {src:"assets/img/PANO_20201223_165143.jpg",title:""},
  {src:"assets/img/IMG_20201223_163748.jpg",title:"राम जानकी मंदिर"},
  {src:"assets/img/IMG_20201223_163702.jpg",title:""},
  {src:"assets/img/IMG_20201223_163810.jpg",title:""},
  {src:"assets/img/IMG_20201223_163702.jpg",title:""},
  {src:"assets/img/IMG_20201223_163831.jpg",title:""},
  {src:"assets/img/IMG_20201223_164020.jpg",title:""},
  {src:"assets/img/PANO_20201223_163842.jpg",title:""},

]

  ngOnInit(): void {
  }

}
