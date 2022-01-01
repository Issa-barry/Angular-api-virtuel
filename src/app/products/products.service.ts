import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

import { Product } from './product';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    // Authorization: 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  /**  Les variables */
  productsUrl = 'api/products';  // URL to web api

 /**Le constructeur */
  constructor(private http: HttpClient) { }


  /**
   * Les métodes Utiles
   */
   private log(log: string) {
    console.info(log);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  /**
   * Nos méthodes
   */

    /** GET ALL Produts from the server */
    getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(this.productsUrl)
        .pipe(
          catchError(this.handleError('getProducts', []))
        );
    }

    /** GET Produts By Id from the server  */
    getProductById(id: number): Observable<Product> {
      return this.http.get<Product>(`${this.productsUrl}/${id}`).pipe(
        tap((_) => this.log(`Le produit don id = ${this.productsUrl}/${id} est trouvé !`)),
        catchError(this.handleError<Product>(`getProduct id=${id}`))

      );
    }

    /** POST: add a new product to the database */
    addProduct(product: Product): Observable<Product>
          {
            // Le serveur vas generer un nouveau id pour le produit
            return this.http.post<Product>(this.productsUrl, product, httpOptions)
                   .pipe(
                        catchError(this.handleError('addProduct', product))
                   )
          }

    /** DELETE: add a new product to the database */
    deleteProduct(id: number): Observable<unknown>
    {
       return this.http.delete(`{this.productsUrl}/${id}`, httpOptions).pipe(
         catchError(this.handleError('deleteProduct'))
       )
    }

    /** PUT: add a new product to the database */
    editProduct(product: Product): Observable<Product>
    {
      // Le serveur vas generer un nouveau id pour le produit
      return this.http.put<Product>(this.productsUrl, product, httpOptions)
             .pipe(
                  catchError(this.handleError('addProduct', product))
             )
    }



}
