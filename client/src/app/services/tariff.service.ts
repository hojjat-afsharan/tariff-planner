import { Injectable } from '@angular/core';
import { ReplaySubject, map, tap } from 'rxjs';
import { Product } from '../models/product.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class TariffService {

  private _products$ = new ReplaySubject<Product[]>(1);
  public products$ = this._products$.asObservable();

  constructor(private dataService: DataService) {}

  getProducts(consumption: number){
    this.dataService
      .fetchProducts$(consumption)
      .pipe(
        map((productsDTO) =>
          productsDTO.map((productDTO) => new Product(productDTO))
        ),
        tap((products) => this._products$.next(products))
      ).subscribe();
  }
}
