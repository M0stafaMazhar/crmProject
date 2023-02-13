import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { AddRoleComponent } from './components/add-role/add-role.component';
import { AddUnitComponent } from './components/add-unit/add-unit.component';
import { BuldingComponent } from './components/bulding/bulding.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { RegisterComponent } from './components/register/register.component';
import { RolesComponent } from './components/roles/roles.component';
import { SellUnitComponent } from './components/sell-unit/sell-unit.component';
import { SingleProjectsComponent } from './components/single-projects/single-projects.component';
import { SingleUnitComponent } from './components/single-unit/single-unit.component';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { UnitsComponent } from './components/units/units.component';
import { UpdateProjectComponent } from './components/update-project/update-project.component';
import { UpdateUnitComponent } from './components/update-unit/update-unit.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UsersComponent } from './components/users/users.component';
import { EmployeeGuard } from './guards/employee.guard';
import { LogedinGuard } from './guards/logedin.guard';
import { NotLogedinGuard } from './guards/not-logedin.guard';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:"login" , component:LoginComponent , canActivate:[LogedinGuard]},
  {path:"register" , component:RegisterComponent , canActivate:[NotLogedinGuard , EmployeeGuard]},
  {path:"profile" , component:ProfileComponent, canActivate:[NotLogedinGuard]},
  {path:"projects" , component:ProjectsComponent},
  {path:"projects/:projectId" , component:SingleProjectsComponent},
  {path:"roles" , component:RolesComponent},
  {path:"bulding/:buldingId" , component:BuldingComponent},
  {path:"users", component:UsersComponent , canActivate:[NotLogedinGuard , EmployeeGuard]},
  {path:"users/:userId" , component:SingleUserComponent , canActivate:[NotLogedinGuard , EmployeeGuard]},
  {path:"addproject" ,component:AddProjectComponent , canActivate:[NotLogedinGuard , EmployeeGuard]},
  {path:"units/add/:floorId" , component:AddUnitComponent , canActivate:[NotLogedinGuard , EmployeeGuard]},
  {path:"units/update/:unitId" , component:UpdateUnitComponent , canActivate:[NotLogedinGuard , EmployeeGuard]},
  {path:"units/:unitId" , component:SingleUnitComponent},
  {path:"projects/update/:projectId" , component:UpdateProjectComponent , canActivate:[NotLogedinGuard , EmployeeGuard]},
  {path:"users/update/:userId" , component:UpdateUserComponent , canActivate:[NotLogedinGuard , EmployeeGuard]},
  {path:"units/sell/:unitId" , component:SellUnitComponent , canActivate:[EmployeeGuard]}, 
  {path:"add/role" , component:AddRoleComponent},




  {path:"**" , component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
