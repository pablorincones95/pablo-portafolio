import { Component } from '@angular/core';
import { DataPageService } from './services/data-page.service';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public _datePagesService: DataPageService,
    public productsService: ProductsService
  ) {

  }
}
