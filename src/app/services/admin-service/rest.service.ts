import { Injectable, Attribute } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient ) {  }
  getAttribute(){
    return this.http.get(environment.url+'/attribute/');
  }
  addAttribute(attribute) {
    return this.http.post(environment.url+'/attribute/add',attribute);
  }
  deleteAttribute(id){
    let obj:any = {}
    obj.id = id
    console.log(obj);
    return this.http.delete(environment.url+'/attribute/delete?id='+id);
  }
  

}
