import {Injectable} from '@angular/core';
import {Author} from "../models/Author";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private backendUrl:string = "http://localhost:8080/author";

  currentUser?: Author;

  constructor(private httpClient: HttpClient) { }
  getAuthor(): Author{
    return {
      id: 5,
      name: "Adama TUO",
      email: "tuoadama17@gmail.com",
      password: "12345"
    }
  }

  createAuthor(author: Author): Observable<Author>{
    const path = this.backendUrl+"/add"
    return this.httpClient.post(path, author) as Observable<Author>
  }
}
