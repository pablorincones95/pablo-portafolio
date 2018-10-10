import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  product: Product;

  constructor(private router: ActivatedRoute, public productsService: ProductsService) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.productsService.getProduct(params['id']).subscribe((product: Product) => {
        this.product = product;
      });
    });
  }

}
