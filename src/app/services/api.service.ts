import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

const httpRequests = {
  headers: new HttpHeaders({
    'Accept':'application/json',
    'Content-Type':'application/json',
    Authorization:'Bearer e6769dc07e6035a86f07357b72edb98f69b4e42026d0cb3cbcc06350cd6afe5a'
  })
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl = 'https://gorest.co.in/public/v2/users'

  constructor(private http: HttpClient) { 

   
  }
   //HTTP METHODS//
   getAllUsers(){
    return this.http.get<any>(this.apiUrl,httpRequests)
    .pipe(map((response:any)=>{
      return response;
    }))
  }


   postUser(data : any){
    return this.http.post<any>(this.apiUrl, data, httpRequests)
    .pipe(map((response:any)=>{
      return response;
    }))
  }

updateUser(data : any, id :number ){
    return this.http.put<any>(this.apiUrl+'/'+id, data, httpRequests)
    .pipe(map((response:any)=>{
      return response;
    }))
  }

  
  deleteUser(id : number){
    return this.http.delete<any>(this.apiUrl+'/'+id,httpRequests)
    .pipe(map((response:any)=>{
      return response;
    }))
  }
  
}
