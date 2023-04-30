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
  getAuthor(): Author | undefined {
    const user = localStorage.getItem("author")
    if(user != null){
      this.currentUser = JSON.parse(user);
      return this.currentUser!;
    }
    return undefined
  }

  createAuthor(author: Author): Observable<Author>{
    const path = this.backendUrl+"/add"
    return this.httpClient.post(path, author) as Observable<Author>
  }

  login(username:string, password:string): Observable<any> {
    const path = this.backendUrl+"/login";
    return this.httpClient.post(path, {username, password})
  }
}
