import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';

import { Index1Component } from './index1/index1.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RecoverpwdComponent } from './recoverpwd/recoverpwd.component';

@NgModule({
  declarations: [Index1Component, LoginComponent, SignupComponent, RecoverpwdComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule, ScrollToModule.forRoot(),
    NgbModalModule
  ]
})
export class PagesModule { }
