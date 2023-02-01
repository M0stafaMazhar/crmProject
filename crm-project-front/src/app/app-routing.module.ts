import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { AddUnitComponent } from './components/add-unit/add-unit.component';
import { BuldingComponent } from './components/bulding/bulding.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { RegisterComponent } from './components/register/register.component';
import { RolesComponent } from './components/roles/roles.component';
import { SingleProjectsComponent } from './components/single-projects/single-projects.component';
import { SingleUnitComponent } from './components/single-unit/single-unit.component';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { UnitsComponent } from './components/units/units.component';
import { UpdateProjectComponent } from './components/update-project/update-project.component';
import { UpdateUnitComponent } from './components/update-unit/update-unit.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:"login" , component:LoginComponent},
  {path:"register" , component:RegisterComponent},
  {path:"profile" , component:ProfileComponent},
  {path:"projects" , component:ProjectsComponent},
  {path:"projects/:projectId" , component:SingleProjectsComponent},
  {path:"roles" , component:RolesComponent},
  {path:"bulding/:buldingId" , component:BuldingComponent},
  {path:"users", component:UsersComponent},
  {path:"users/:userId" , component:SingleUserComponent},
  {path:"addproject" ,component:AddProjectComponent},
  {path:"units/add/:floorId" , component:AddUnitComponent},
  {path:"units/update/:unitId" , component:UpdateUnitComponent},
  {path:"units/:unitId" , component:SingleUnitComponent},
  {path:"projects/update/:projectId" , component:UpdateProjectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
