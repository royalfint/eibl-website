import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('PageTrans', [
      state('here', style({
        opacity: 1,
      })),
      state('gone', style({
        opacity: 0,
      })),
      transition('here <=> gone', animate('300ms ease-out')),
    ]),
    trigger('myAwesomeAnimation', [
        state('small', style({
            transform: 'translateX(0px)',
        })),
        state('large', style({
            transform: 'translateX(5px)',
        })),
        transition('small <=> large', animate('300ms ease-in')),
    ]),
    trigger('animLeftBlock', [
        state('no', style({
            transform: 'translateX(-200px)',
            opacity: '0',
        })),
        state('yes', style({
            transform: 'translateX(0px)',
            opacity: '1',
        })),
        transition('no <=> yes', animate('300ms ease-out')),
    ]),
    trigger('animBottomBlock', [
        state('no', style({
            transform: 'translateY(100px)',
            opacity: '0',
        })),
        state('yes', style({
            transform: 'translateY(0)',
            opacity: '1',
        })),
        transition('no <=> yes', animate('300ms ease-out')),
    ]),
  ]
})

export class HomeComponent implements OnInit {
  state: string = "small";
  animLeftBlock: string = "no";
  animBottomBlock: string = "no";
  trans: string = "here";

  animate(){
    this.state = (this.state === "small" ? "large" : "small");
  }
  
  currentSlide = "../../assets/back/home.jpg"
  public pageNumber : number = 0;
  public pageCount : number = 0;
  pages: Array<{img: string}> = [
    { img: "../../assets/back/home.jpg" },
    { img: "../../assets/back/home2.jpg" },
    { img: "../../assets/back/home.jpg" },
    { img: "../../assets/back/home2.jpg" }
  ];

  onPageChange(i){
    this.currentSlide = this.pages[i].img;
    this.pageNumber = i;
  }

  animateLeftBlock(){
    this.animLeftBlock = "yes";
  }

  animateBottomBlock(){
    this.animBottomBlock = "yes";
  }

  ngAfterViewInit() {
    setTimeout(()=>{
      this.animateLeftBlock()
        setTimeout(()=>{
          this.animateBottomBlock()
        },400);
    },400);
  }

  constructor() { }

  ngOnInit() {
  }

}
