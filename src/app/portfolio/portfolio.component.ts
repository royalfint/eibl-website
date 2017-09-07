import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  img:string[] = ["url('../assets/back/home.jpg')"];

  constructor() { }

  ngOnInit() {
  }

}
