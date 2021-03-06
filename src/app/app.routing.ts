import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { AuthGaurd} from 'app/common/gaurds/auth-gaurd/auth.guard';
import { LoginComponent } from 'app/auth/login/login.component'
import { from } from 'rxjs';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes =[
  {
    path: '#',
    redirectTo: '',
    pathMatch: 'full', 
  }, 
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGaurd],
    children: [{
      path: '',
      loadChildren: './admin/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  },
  {
    path: 'login',
    component:LoginComponent
    // children: [{
    //   path: '',
    //   loadChildren: './auth/auth.module#AuthModule'
    // }]
  },
  // {
  //   path: 'register',
  //   component:RegisterComponent,
  //   // children: [{
  //   //   path: '',
  //   //   loadChildren: './auth/auth.module#AuthModule'
  //   // }]
  // },
  
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
