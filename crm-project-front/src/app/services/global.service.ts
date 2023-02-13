import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../interfaces/register';
import { Login } from '../interfaces/login';
@Injectable({
  providedIn: 'root'
})

export class GlobalService {
  baseUrl = 'http://localhost:3000/api/';
  constructor(private http:HttpClient) { }
  
  getRoles():Observable<any>{
    return this.http.get(this.baseUrl+"role/show-roles")  
  }
  
  register(obj:Register):Observable<any>{
    return this.http.post(this.baseUrl+"user/add-user" , obj)  
  }
  
  login(obj:Login):Observable<any>{
    return this.http.post(this.baseUrl+"user/login" , obj)  
  }

  getUsers():Observable<any>{
    return this.http.get(this.baseUrl+"user/show-all-users")  
  }

  getUser(id:any):Observable<any>{
    return this.http.get(this.baseUrl+"user/show-user/"+id)  
  }

  updateUser( obj:any , id:any):Observable<any>{
    return this.http.put(this.baseUrl+"user/edit-user/"+id , obj)
  }

  deleteUser(id:string):Observable<any>{
    return this.http.delete(this.baseUrl+"user/delete-user/"+id) 
  }

  getProfile():Observable<any>{
    return this.http.get(this.baseUrl+"user/myprofile") 
  }

  getProjects():Observable<any>{
    return this.http.get(this.baseUrl+"project/show-all-projects")
  }

  addProject(obj:any):Observable<any>{
    return this.http.post(this.baseUrl+"project/add-project" , obj)
  }

  addProjectImages(id:any , obj:any):Observable<any>{
    return this.http.post(this.baseUrl+"project/add-images/"+id , obj)
  }

  deleteProject(id:any):Observable<any>{
    return this.http.delete(this.baseUrl+"project/delete-project/"+id)  
  }

  deleteProjecImage(id:any , i:any):Observable<any>{
    return this.http.delete(this.baseUrl+"project/delete-images/"+id+"/"+i)  
  }

  singleProject(id:any):Observable<any>{
    return this.http.get(this.baseUrl+"project/show-project/"+id)  
  }

  updateProject(obj:any , id:any):Observable<any>{
    return this.http.put(this.baseUrl+"project/edit-project/"+id , obj)  
  }

  getBulding(id:any):Observable<any>{
    return this.http.get(this.baseUrl+"project/bulding/"+id) 
  }

  addBuldingImages(id:any , obj:any):Observable<any>{
    return this.http.post(this.baseUrl+"project/add-images/bulding/"+id , obj)
  }

  deleteBuldingImage(id:any , i:any):Observable<any>{
    return this.http.delete(this.baseUrl+"project/delete-images/bulding/"+id+"/"+i)  
  }

  getFloorUnits(id:any):Observable<any>{
    return this.http.get(this.baseUrl+"unit/floor/"+id) 
  }

  getUnit(id:any):Observable<any>{
    return this.http.get(this.baseUrl+"unit/show-unit/"+id) 
  }

  addUnit(obj:any , id:any):Observable<any>{
    return this.http.post(this.baseUrl+"unit/add-unit/"+id , obj ) 
  }

  updateUnit(obj:any , id:any):Observable<any>{
    return this.http.put(this.baseUrl+"unit/edit-unit/"+id , obj ) 
  }

  deleteUnit(id:any):Observable<any>{
    return this.http.delete(this.baseUrl+"unit/delete-unit/"+id) 
  }

  deleteUnitImage(id:any , i:any):Observable<any>{
    return this.http.delete(this.baseUrl+"unit/delete-images/"+id+"/"+i)  
  }

  addUnitImages(id:any , obj:any):Observable<any>{
    return this.http.post(this.baseUrl+"unit/add-images/"+id , obj)
  }

  changePaymentStat(id:any):Observable<any>{
    return this.http.get(this.baseUrl+"unit/activate-payment/"+id)
  }

  sellUnit(obj:any , id:any):Observable<any>{
    return this.http.post(this.baseUrl+"unit/sell-unit/"+id , obj)
  }

  logOut():Observable<any>{
    return this.http.get(this.baseUrl+"user/logout")
  }

  invoices(id:any):Observable<any>{
    return this.http.get(this.baseUrl+"unit/payment/invoice/"+id , { responseType: 'blob' })
  }

  deleteRole(id:any):Observable<any>{
    return this.http.delete(this.baseUrl+"role/delete-role/"+id)
  }

  getUrls():Observable<any>{
    return this.http.get(this.baseUrl+"role/urls")
  }

  addRole(obj:any):Observable<any>{
    return this.http.post(this.baseUrl+"role/add-role" , obj)
  }

  

 






}
