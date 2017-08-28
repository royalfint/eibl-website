import { Component, ViewEncapsulation } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('loadingAnim', [
      state('loading', style({
        height: "0vh",
      })),
      state('loaded', style({
        height: "100vh",
      })),
      transition('loading <=> loaded', animate('3000ms ease-out')),
    ])
  ]
})
export class AppComponent {
  title = 'app';
  loading = "loading";

  load() {
    this.loading = "loaded";   
  }

  constructor(){
    setTimeout(()=>{
      this.load();
    },1000);
  }
}
