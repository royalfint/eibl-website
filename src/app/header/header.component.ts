import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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
