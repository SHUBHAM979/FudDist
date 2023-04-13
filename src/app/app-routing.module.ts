import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PrizeComponent } from './prize/prize.component';
import { VisionPageComponent } from './vision-page/vision-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

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
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
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
    path:'order',
    component: ShoppingListComponent
  }
  ,
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
