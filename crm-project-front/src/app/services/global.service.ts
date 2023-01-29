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
  getProjects():Observable<any>{
    return this.http.get(this.baseUrl+"project/show/all")
  }

  getRoles():Observable<any>{
    return this.http.get(this.baseUrl+"role/show-all")  
  }
  
  register(obj:Register):Observable<any>{
    return this.http.post(this.baseUrl+"user/register" , obj)  
  }

  login(obj:Login):Observable<any>{
    return this.http.post(this.baseUrl+"user/login" , obj)  
  }

  deleteProject(id:any):Observable<any>{
    return this.http.delete(this.baseUrl+"project/delete/"+id)  
  }

  singleProject(id:any):Observable<any>{
    return this.http.get(this.baseUrl+"project/show/"+id)  
  }

  getUsers():Observable<any>{
    return this.http.get(this.baseUrl+"user/all")  
  }

  deleteUser(id:string):Observable<any>{
    return this.http.delete(this.baseUrl+"user/delete/"+id) 
  }

  showUser(id:any):Observable<any>{
    return this.http.get(this.baseUrl+"user/show/"+id) 
  }

  getBulding(id:any):Observable<any>{
    return this.http.get(this.baseUrl+"project/bulding/"+id) 
  }

  getFloorUnits(id:any):Observable<any>{
    return this.http.get(this.baseUrl+"unit/floor/"+id) 
  }





}
