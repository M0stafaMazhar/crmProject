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
    return this.http.get(this.baseUrl+"role/show-all")  
  }
  
  register(obj:Register):Observable<any>{
    return this.http.post(this.baseUrl+"user/register" , obj)  
  }
  
  login(obj:Login):Observable<any>{
    return this.http.post(this.baseUrl+"user/login" , obj)  
  }

  getUsers():Observable<any>{
    return this.http.get(this.baseUrl+"user/all")  
  }

  getUser(id:any):Observable<any>{
    return this.http.get(this.baseUrl+"user/show/"+id)  
  }

  updateUser( obj:any , id:any):Observable<any>{
    return this.http.put(this.baseUrl+"user/edit/"+id , obj)
  }

  deleteUser(id:string):Observable<any>{
    return this.http.delete(this.baseUrl+"user/delete/"+id) 
  }

  getProfile():Observable<any>{
    return this.http.get(this.baseUrl+"user/myprofile") 
  }

  getProjects():Observable<any>{
    return this.http.get(this.baseUrl+"project/show/all")
  }

  addProject(obj:any):Observable<any>{
    return this.http.post(this.baseUrl+"project/add-project" , obj)
  }

  addProjectImages(id:any , obj:any):Observable<any>{
    return this.http.post(this.baseUrl+"project/add-image/"+id , obj)
  }

  deleteProject(id:any):Observable<any>{
    return this.http.delete(this.baseUrl+"project/delete/"+id)  
  }

  deleteProjecImage(id:any , i:any):Observable<any>{
    return this.http.delete(this.baseUrl+"project/image/delete/"+id+"/"+i)  
  }

  singleProject(id:any):Observable<any>{
    return this.http.get(this.baseUrl+"project/show/"+id)  
  }

  updateProject(obj:any , id:any):Observable<any>{
    return this.http.put(this.baseUrl+"project/update/"+id , obj)  
  }

  getBulding(id:any):Observable<any>{
    return this.http.get(this.baseUrl+"project/bulding/"+id) 
  }

  addBuldingImages(id:any , obj:any):Observable<any>{
    return this.http.post(this.baseUrl+"project/bulding/image/"+id , obj)
  }

  deleteBuldingImage(id:any , i:any):Observable<any>{
    return this.http.delete(this.baseUrl+"project/bulding/delete-image/"+id+"/"+i)  
  }

  getFloorUnits(id:any):Observable<any>{
    return this.http.get(this.baseUrl+"unit/floor/"+id) 
  }

  getUnit(id:any):Observable<any>{
    return this.http.get(this.baseUrl+"unit/show-unit/"+id) 
  }

  addUnit(obj:any , id:any):Observable<any>{
    return this.http.post(this.baseUrl+"unit/add/"+id , obj ) 
  }

  updateUnit(obj:any , id:any):Observable<any>{
    return this.http.put(this.baseUrl+"unit/update/"+id , obj ) 
  }

  deleteUnit(id:any):Observable<any>{
    return this.http.delete(this.baseUrl+"unit/delete/"+id) 
  }

  deleteUnitImage(id:any , i:any):Observable<any>{
    return this.http.delete(this.baseUrl+"unit/image/delete/"+id+"/"+i)  
  }

  addUnitImages(id:any , obj:any):Observable<any>{
    return this.http.post(this.baseUrl+"unit/add-image/"+id , obj)
  }

  changePaymentStat(id:any):Observable<any>{
    return this.http.get(this.baseUrl+"unit/payment/activate/"+id)
  }

 






}
