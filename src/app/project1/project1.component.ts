import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.css']
})
export class Project1Component implements OnInit {
  img: string[] = ["../../assets/img/rails.jpg"];

  pages: Array<{img: string}> = [
    { img: "../../assets/img/rails.jpg" },
    { img: "../../assets/back/2.jpg" },
    { img: "../../assets/back/3.jpg" },
    { img: "../../assets/back/4.jpg" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
