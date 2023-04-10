import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainComponent } from './main/main.component';
import { PrizeComponent } from './prize/prize.component';
import { VisionPageComponent } from './vision-page/vision-page.component';

const routes: Routes = [
  {
    path:"",
    component:HomePageComponent
  },
  {
    path:'page-not-found',
    component:ErrorPageComponent
  },
  {
    path:'main',
    component:MainComponent
  },
  {
    path:'vision',
    component:VisionPageComponent
  },
  {
    path:'prize',
    component:PrizeComponent
  },
  {
    path:'about',
    component:AboutPageComponent
  },
  {
    path:'**',
    redirectTo:'page-not-found',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
