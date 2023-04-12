import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TariffService {

  private readonly tariffsUrl = 'http://localhost:3000/tariffs';

  constructor(private http: HttpClient) { }

  getTariffs(consumption: number): Observable<any> {
    return this.http.get<any>(`${this.tariffsUrl}?consumption=${consumption}`);
  }
}
