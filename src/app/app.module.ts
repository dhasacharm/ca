import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { RedflagComponent } from './redflag/redflag.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [

  {
    path: 'redflag',
    component: RedflagComponent
  },
  {
    path: 'dashborad',
    component: DashboradComponent
  },
  {
    path: 'category',
    component: HomeComponent
  }
 
];


@NgModule({
  declarations: [
    AppComponent,
    DashboradComponent,
    RedflagComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
