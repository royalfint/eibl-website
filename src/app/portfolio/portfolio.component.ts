import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  img:string[] = ["url('../assets/img/1.jpg')",
    "url('../assets/img/2.jpg')",
    "url('../assets/back/dump.jpg')",
    "url('../assets/img/3.jpg')",
    "url('../assets/img/4.jpg')",
    "url('../assets/img/3.jpg')",
    "url('../assets/img/4.jpg')"
  ];

  constructor() { }

  ngOnInit() {
  }

}
