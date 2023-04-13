import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ProductDTO } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly tariffsUrl = 'http://localhost:3000/tariffs';

  constructor(private http: HttpClient) { }

  fetchProducts$(consumption: number): Observable<ProductDTO[]> {
    const params = new HttpParams().set('consumption', consumption.toString());
    return this.http.get<ProductDTO[]>(this.tariffsUrl, {
      params
    })
    .pipe(
      catchError(err => {
        console.log(err);
        return throwError(err);
      })
    );
  }
}
