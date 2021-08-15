import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericFindReturn } from 'src/app/core/utils';
import { environment } from 'src/environments/environment.prod';
import { CreateUser, UpdateUser, User } from './utils';
import { FindUser } from './utils/find-user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly apiUrl = `${environment.api}/users`;

  constructor(private http: HttpClient) {}

  async findOne(id: number) {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  async find(args?: FindUser) {
    return this.http.get<GenericFindReturn<User>>(`${this.apiUrl}`, {
      params: { ...args },
    });
  }

  async create(args: CreateUser) {
    return this.http.post<User>(this.apiUrl, args);
  }

  async update(id: number, args: UpdateUser) {
    return this.http.put(`${this.apiUrl}/${id}`, args);
  }

  async delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
