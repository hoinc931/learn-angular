import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product-interface';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API: string = 'https://60ef93eaf587af00179d3a4d.mockapi.io/productss';

  constructor( private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API);
  }

  addProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.API, product)
  }

  removeProduct(id :number): Observable<Product> {
    return this.http.delete<Product>(`${this.API}/${id}`);
  }

  getDetail(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.API}/${id}`)
  }
}
