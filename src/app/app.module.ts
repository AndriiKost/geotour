import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { RulesComponent } from './rules/rules.component';
import { MapComponent } from './map/map.component';
import { ProfileComponent } from './profile/profile.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PrivateChecklistComponent } from './checklist/private-checklist/private-checklist.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { CallbackComponent } from './callback/callback.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    RulesComponent,
    MapComponent,
    ProfileComponent,
    ChecklistComponent,
    SignInComponent,
    SignUpComponent,
    PrivateChecklistComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
