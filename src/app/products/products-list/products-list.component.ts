import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  providers: [ProductsService],
})
export class ProductsListComponent implements OnInit {
  /**
   * Les variables
   */
  products: Product[] = [];

  constructor(private productsService: ProductsService,
              private router: Router) { }

  ngOnInit(): void {
     this.getProducts();//Afficher les produits
  }
  /**
   * Les méthodes
   */
  getProducts()
  {
    this.productsService.getProducts().subscribe(products => this.products = products);
  }

  goDetailProduct(product : Product)
  {
    let link = ['/product-detail', product.id];
    this.router.navigate(link);
  }

  deleteProduct(product: Product): void
  {

    this.products = this.products.filter(p => p !== product);
     this.productsService.deleteProduct(product.id).subscribe();
     this.router.navigate(['/'])
  }

  goEditProduct(product: Product): void
  {
    let link = ['/product-edit', product.id];
    this.router.navigate(link);
  }
}
