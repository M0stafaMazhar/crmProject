import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuldingComponent } from './components/bulding/bulding.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { RegisterComponent } from './components/register/register.component';
import { RolesComponent } from './components/roles/roles.component';
import { SingleProjectsComponent } from './components/single-projects/single-projects.component';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { UnitsComponent } from './components/units/units.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:"login" , component:LoginComponent},
  {path:"register" , component:RegisterComponent},
  {path:"profile" , component:ProfileComponent},
  {path:"projects" , component:ProjectsComponent},
  {path:"projects/:projectId" , component:SingleProjectsComponent},
  {path:"units" , component:UnitsComponent},
  {path:"roles" , component:RolesComponent},
  {path:"bulding/:buldingId" , component:BuldingComponent},
  {path:"users", component:UsersComponent},
  {path:"users/:userId" , component:SingleUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
