import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'recent-click',
  templateUrl: './recent-click.component.html',
  styleUrls: ['./recent-click.component.css']
})
export class RecentClickComponent implements OnInit {

  constructor() { }

  img1="assets/img/IMG_20201223_164352.jpg"
  img2="assets/img/IMG_20201223_165134.jpg"
  img3="assets/img/IMG_20201223_163831.jpg"
  img4="assets/img/maa-kali.jpg"
  img5="assets/img/IMG_20201223_165526.jpg"
  img6="assets/img/WhatsApp Image 2020-12-25 at 6.16.18 PM.jpeg"

  ngOnInit(): void {
  }

}
