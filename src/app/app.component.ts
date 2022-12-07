import { HttpClient } from '@angular/common/http';
import { Component, OnInit, VERSION } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  products: any;
  allproducts: any;
  showallproduct: boolean = true;

  constructor(public http: HttpClient) {}
  ngOnInit() {
    this.http
      .get('https://api.pujakaitem.com/api/products')
      .subscribe((data) => {
        console.log(data);
        this.allproducts = data;
        this.products = data;
      });
  }
  name = 'Angular ' + VERSION.major;

  showallproducts() {
    this.showallproduct = true;
    this.products = this.allproducts;
  }

  showLessProducts() {
    this.showallproduct = false;
    this.products = this.allproducts.slice(0, 6);
    console.log(this.products);
  }
}
