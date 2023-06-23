import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

const API_BASE_URL = 'https://fakestoreapi.com';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(limit = '12', sort = 'desc', category?:string): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(
      `${API_BASE_URL}/products${
        category ? '/category/' + category : ''
      }?sort=${sort}&limit=${limit}`
    )
  }

  getAllCategorie(): Observable<Array<string>> {
    return this.httpClient.get<Array<string>>(
      `${API_BASE_URL}/products/categories`
    )
  }
  
}
