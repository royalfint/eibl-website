import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  { path: '', component: HomeComponent },
  /*{ path: 'portfolio', loadChildren: 'portfolio/portfolio.module#LazyModule'},*/
  { path: 'about', component: AboutComponent},
  { path: "contacts", component: ContactsComponent },
  { path: 'kuryk', component: Project1Component},
  { path: 'arkalyk', component: Project2Component},
  { path: 'iins', component: Project3Component}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);