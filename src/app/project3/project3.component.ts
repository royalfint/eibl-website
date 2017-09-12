import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project3',
  templateUrl: './project3.component.html',
  styleUrls: ['./project3.component.css']
})
export class Project3Component implements OnInit {
  img: string[] = ["../../assets/img/rails.jpg"];
  currentPage = 0;
  currentImg = "";

  pages: Array<{img: string}> = [
    { img: "../../assets/img/rails.jpg" },
    { img: "../../assets/back/2.jpg" },
    { img: "../../assets/back/3.jpg" },
    { img: "../../assets/back/4.jpg" }
  ];

  constructor() {
    this.currentImg = this.pages[this.currentPage].img;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    
  }

  switch(i) {
    this.currentImg = this.pages[i].img;
    this.currentPage = i;
  }
}
