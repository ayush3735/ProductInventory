import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {RegisterComponent} from './register/register.component'
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component'
import {LogoutComponent} from './logout/logout.component'
import {ProductviewComponent } from './productsinven/productview/productview.component';

import {LoginComponent} from './login/login.component';
import {AuthgaurdService} from './authgaurd.service'
import {CandeactivateserviceService} from './candeactivateservice.service'

const routes: Routes = [
  { path: '', component: ProductviewComponent },
  { path: 'products', loadChildren: () => import('./productsinven/productsinven.module').then(m => m.ProductsinvenModule) },
  { path: 'profile', loadChildren: () => import('./profile-module/profile-module.module').then(m => m.ProfileModuleModule) },
  //{ path: 'products', component: ProductviewComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent, canDeactivate: [CandeactivateserviceService]},
  { path: 'logout', component: LogoutComponent},
  {path: 'login', component: LoginComponent},
  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
