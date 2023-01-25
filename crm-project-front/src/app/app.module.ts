import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SingleProjectsComponent } from './components/single-projects/single-projects.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UnitsComponent } from './components/units/units.component';
import { SingleUnitComponent } from './components/single-unit/single-unit.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RolesComponent } from './components/roles/roles.component';
import { SingleRoleComponent } from './components/single-role/single-role.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    SingleProjectsComponent,
    ProfileComponent,
    UnitsComponent,
    SingleUnitComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    RolesComponent,
    SingleRoleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
