import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactsComponent } from './contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { HeaderDarkComponent } from './header-dark/header-dark.component';
import { Project1Component } from './project1/project1.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'about', component: AboutComponent},
  { path: "contacts", component: ContactsComponent },
  { path: 'kuryk', component: Project1Component},
  { path: 'arkalyk', component: Project1Component},
  { path: 'iins', component: Project1Component}
]

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
    Project1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
