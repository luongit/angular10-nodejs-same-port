import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';
const _api = "http://localhost:3000/api/book";
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  books(): Observable<Book[]> {
    return this.http.get<Book[]>(_api)
  }
}
