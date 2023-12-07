import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getProduct(){
    return this.http.get(environment.url+'/product/');
  }
  addProduct(product) {
    return this.http.post(environment.url+'/product/add',product);
  }
}
