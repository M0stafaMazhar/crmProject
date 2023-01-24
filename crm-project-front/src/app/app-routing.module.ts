import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { RegisterComponent } from './components/register/register.component';
import { RolesComponent } from './components/roles/roles.component';
import { UnitsComponent } from './components/units/units.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:"login" , component:LoginComponent},
  {path:"register" , component:RegisterComponent},
  {path:"profile" , component:ProfileComponent},
  {path:"projects" , component:ProjectsComponent},
  {path:"units" , component:UnitsComponent},
  {path:"roles" , component:RolesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
