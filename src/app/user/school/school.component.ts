import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  constructor() { }

  imgSrc1=[
    {src:"assets/img/IMG_20201223_170110.jpg",title:"राजकीय उत्त्क्रमिक मध्य विद्यालय ,दुदाही"},
    {src:"assets/img/IMG_20201223_165705.jpg",title:""},
    {src:"assets/img/PANO_20201223_165823.jpg",title:""},
    {src:"assets/img/IMG_20201223_165526.jpg",title:""},
    {src:"assets/img/IMG_20201223_165536.jpg",title:""},
    {src:"assets/img/IMG_20201223_165745.jpg",title:""},
    {src:"assets/img/IMG_20201223_165642.jpg",title:""},
    {src:"assets/img/IMG_20201223_165730.jpg",title:""},
    {src:"assets/img/IMG_20201223_165937.jpg",title:""},
    {src:"assets/img/IMG_20201223_165259.jpg",title:"आंगनबाड़ी केंद्र चतरा"},
    {src:"assets/img/WhatsApp Image 2020-12-25 at 5.52.26 PM (2).jpeg",title:"आंगनबाड़ी केंद्र बाबा जी कुट्टी"},
    {src:"assets/img/WhatsApp Image 2020-12-25 at 5.52.26 PM (1).jpeg",title:"आंगनबाड़ी केंद्र बाबा जी कुटी प्रवेश द्वार"},
    {src:"assets/img/WhatsApp Image 2020-12-25 at 5.52.26 PM.jpeg",title:""},
  
  ];

  ngOnInit(): void {
  }

}
