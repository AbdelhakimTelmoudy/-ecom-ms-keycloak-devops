import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8888/'; // Changez selon votre backend

  constructor(private http: HttpClient) {}

  // Get all items
  getAll(endpoint: string): Observable<any> {
    return this.http.get(`${this.baseUrl}${endpoint}`);
  }

  // Get item by ID
  getById(endpoint: string, id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}${endpoint}/${id}`);
  }

  // Create item
  create(endpoint: string, data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${endpoint}`, data);
  }

  // Update item
  update(endpoint: string, id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}${endpoint}/${id}`, data);
  }

  // Delete item
  delete(endpoint: string, id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${endpoint}/${id}`);
  }
}
