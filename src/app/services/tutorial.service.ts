import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${baseUrl}/tutos`);
  }

  get(id) {
    return this.http.get(`${baseUrl}/tuto/${id}`);
  }

  create(data) {
    return this.http.post(`${baseUrl}/tuto`, data);
  }

  update(id, data) {
    return this.http.put(`${baseUrl}/tuto/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/tuto/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByTitle(title) {
    return this.http.get(`${baseUrl}?title=${title}`);
  }
}