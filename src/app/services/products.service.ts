import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  load = true;
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private http: HttpClient) {
    this.getProducts();
  }

  private getProducts() {
    return new Promise((resolve, reject) => {
      this.http.get('https://pablo-portafolio.firebaseio.com/products.json').subscribe((resp: Product[]) => {
        this.products = resp;
        this.load = false;
        resolve();
      });
    });
  }

  getProduct(id: string) {
    return this.http.get(`https://pablo-portafolio.firebaseio.com/products/${id}.json`);
  }

  searchProducts(text: string) {
    if (this.products.length === 0) {
      this.getProducts().then(() => {
        this.productsFiltered(text);
      });
    } else {
      this.productsFiltered(text);
    }

  }

  private productsFiltered(text: string) {
   text = text.toLocaleLowerCase();
   this.products.forEach(products => {
    if (products.category.indexOf(text) >= 0 || products.name.indexOf(text) >= 0 ) {
      this.filteredProducts.push(products);
    }
   });
  }
}
