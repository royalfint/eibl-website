import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    console.log($event);
    console.log("scrolling");
  } 

  openMenu = false;
  success = false;
  callback = false;
  
  constructor() { }

  ngOnInit() {
  }

  onCallback(){
    this.callback = !this.callback;
  }

  onSubmit(){
    this.success = true;
    this.callback = false;
  }

  onClose(){
    this.callback = false;
  }

}
