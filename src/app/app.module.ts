import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './admin/components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from 'app/admin/dashboard/dashboard.component';
import { AuthModule } from 'app/auth/auth.module';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { from } from 'rxjs';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    // AuthModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    RegisterComponent,
    // AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
