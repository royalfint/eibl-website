import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-dark',
  templateUrl: './header-dark.component.html',
  styleUrls: ['./header-dark.component.css']
})
export class HeaderDarkComponent implements OnInit {
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
