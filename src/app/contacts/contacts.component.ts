import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  @ViewChild('form') callbackForm: NgForm;
  success = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.success = true;
  }
}
