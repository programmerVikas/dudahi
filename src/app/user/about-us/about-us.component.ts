import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const options = {
      strings: ['Hi, I have written and developed this site , I am committed to provide everything on various ways. No one is perfect in this world and nothing is eternally best. But we can try to be better. I hope it will help you a lot.'],
      typeSpeed: 100,

      showCursor: false,
      // cursorChar: '|',
      smartBackspace: false,
      loop: false
 }; 
 const typed = new Typed('.usercon', options);
  
  }

}
