import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericFindReturn } from 'src/app/core/utils';
import { environment } from 'src/environments/environment.prod';
import { CreateTitle, UpdateTitle, FindTitle, Title } from './utils';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  private readonly apiUrl = `${environment.api}/titles`;

  constructor(private http: HttpClient) {}

  findOne(id: number) {
    return this.http.get<Title>(`${this.apiUrl}/${id}`);
  }

  find(args?: FindTitle) {
    return this.http.get<GenericFindReturn<Title>>(`${this.apiUrl}`, {
      params: { ...args },
    });
  }

  create(args: CreateTitle) {
    return this.http.post<Title>(this.apiUrl, args);
  }

  update(id: number, args: UpdateTitle) {
    return this.http.put(`${this.apiUrl}/${id}`, args);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
