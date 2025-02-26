import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'https://jsonplaceholder.typicode.com/albums';

@Injectable({ providedIn: 'root' })
export class AlbumsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums'
  constructor(private http: HttpClient) {}

  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(API_URL);
  }
  getAlbum(id: number): Observable<any> {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }
  
  getPhotos(id: number): Observable<any[]> {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`); 
  }

  updateAlbum(id: number, data: any): Observable<any> {
    return this.http.put(`${API_URL}/${id}`, data);
  }  
  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
