import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const options = {
      strings: ['MR.DUDAHI...'],
      typeSpeed: 200,
      backSpeed: 100,
      showCursor: false,
      // cursorChar: '|',
      smartBackspace: false,
      loop: true
 }; 
 const typed = new Typed('.maa', options);
 
  }

}
