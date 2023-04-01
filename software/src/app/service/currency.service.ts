import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseCurrencyDto} from "../dto/response.currency.dto";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  BACK_URL = environment.url;

  constructor(private http: HttpClient) {

  }
  public convertCurrency(from: string, to: string, amount: number): Observable<ResponseCurrencyDto> {
    return this.http.get<ResponseCurrencyDto>(`${this.BACK_URL}/api/v1/diviapi/convertion?from=${from}&to=${to}&amount=${amount}`);
  }
  public recordCurrency(): Observable<any> {
    return this.http.get<any>(`${this.BACK_URL}/api/v1/diviapi/list?page=0&size=10`);
  }
}
