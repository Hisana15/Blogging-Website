import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  register(value:any) {
    return this.http.post<any>('http://localhost:3000/register', value);
  }
  login(value: any) {
    return this.http.post<any>('http://localhost:3000/login', value);
  }
  blog(title: any, content: any, excerpt: any) {
    return this.http.post('http://localhost:3000/blog', {
      title,
      content,
      excerpt,
    });
  }
}
