import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericFindReturn } from 'src/app/core/utils';
import { environment } from 'src/environments/environment.prod';
import {
  CreateNonPayment,
  FindNonPayment,
  NonPayment,
  UpdateNonPayment,
} from './utils';

@Injectable({
  providedIn: 'root',
})
export class NonPaymentService {
  private readonly apiUrl = `${environment.api}/nonpayments`;

  constructor(private http: HttpClient) {}

  async findOne(id: number) {
    return this.http.get<NonPayment>(`${this.apiUrl}/${id}`);
  }

  async find(args?: FindNonPayment) {
    return this.http.get<GenericFindReturn<NonPayment>>(`${this.apiUrl}`, {
      params: { ...args },
    });
  }

  async create(args: CreateNonPayment) {
    return this.http.post<NonPayment>(this.apiUrl, args);
  }

  async update(id: number, args: UpdateNonPayment) {
    return this.http.put(`${this.apiUrl}/${id}`, args);
  }

  async delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
