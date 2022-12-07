import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {
  constructor(public http: HttpClient) {}
  getProducts() {
    return this.http.get('https://api.pujakaitem.com/api/products');
  }
}
