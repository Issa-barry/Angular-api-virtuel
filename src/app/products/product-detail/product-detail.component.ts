import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
product  : any =  null;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productsService: ProductsService) { }

  ngOnInit(): void {
     this.recupProduct();
  }
  recupProduct()
  {
     let id = this.route.snapshot.params['id'];
     this.productsService.getProductById(id).subscribe(product => this.product = product);
  }




}
