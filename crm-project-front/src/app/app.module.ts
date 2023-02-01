import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

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
import { FooterComponent } from './components/footer/footer.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { UsersComponent } from './components/users/users.component';
import { BuldingComponent } from './components/bulding/bulding.component';
import { FloorComponent } from './components/floor/floor.component';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { AddUnitComponent } from './components/add-unit/add-unit.component';
import { UpdateProjectComponent } from './components/update-project/update-project.component';
import { UpdateUnitComponent } from './components/update-unit/update-unit.component';
import { UpdateBuldingComponent } from './components/update-bulding/update-bulding.component';

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
    HomeComponent,
    FooterComponent,
    UsersComponent,
    BuldingComponent,
    FloorComponent,
    SingleUserComponent,
    AddProjectComponent,
    AddUnitComponent,
    UpdateProjectComponent,
    UpdateUnitComponent,
    UpdateBuldingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
