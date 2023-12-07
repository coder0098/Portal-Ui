import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient,HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }
  getById(id){
    return this.http.get(environment.url+'/categories/getId?id='+id);
  }
  addCate(categories) {
    return this.http.post(environment.url+'/categories/add',categories);
  }
  getCate() {
    return this.http.get(environment.url+'/categories/');
  }
  updateCate(catObj) {
    return this.http.put(environment.url+`/categories/update?id=${catObj.id}`,catObj);
  }

  delCate(id){
    let obj:any = {}
    obj.id = id
    console.log(obj);
    return this.http.delete(environment.url+'/categories/delete?id='+id);
    
  }
  
}
