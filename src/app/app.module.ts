import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CallbackComponent } from './callback/callback.component';

import { ContactsComponent } from './contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { HeaderDarkComponent } from './header-dark/header-dark.component';
import { Project1Component } from './project1/project1.component';
import { Project2Component } from './project2/project2.component';
import { Project3Component } from './project3/project3.component';
import { HomeComponent } from './home/home.component';
import { AboutnewComponent } from './aboutnew/aboutnew.component';

import { routing } from './app.routing';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactsComponent,
    FooterComponent,
    PortfolioComponent,
    AboutComponent,
    HeaderDarkComponent,
    Project1Component,
    Project2Component,
    Project3Component,
    CallbackComponent,
    AboutnewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
