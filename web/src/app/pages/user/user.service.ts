import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly apiUrl = `${environment.api}/users`;

  constructor(private http: HttpClient) {}

  async findOne(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  async find() {
    return this.http.get(`${this.apiUrl}`);
  }

  async create(args: any) {
    return this.http.post(this.apiUrl, args);
  }

  async update(id: number, args: any) {
    return this.http.put(`${this.apiUrl}/${id}`, args);
  }

  async delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
