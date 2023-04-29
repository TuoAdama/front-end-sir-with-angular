import { Injectable } from '@angular/core';
import {Author} from "../models/Author";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private backendUrl:string = "http://localhost:8080";
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getAuthor(): Author{
    const author = new Author();
    author.id = 7
    author.name = "Adama TUO"
    return author
  }

  /**
   * To get all authors
   */
  getAuthors(): Observable<Object> {
    return this.httpClient.get(this.backendUrl + "/author/all")
  }

  /**
   * Find an author given his id
   * @param id, the author to find
   */
  getAuthorById(id: number): Observable<Author>{
    const path = this.backendUrl+"/author/find/"+id
    return this.httpClient.get(path);
  }

  /** To Add new author
   * @param body
   */
  createAuthor(body: {
    firstname: string,
    lastname: string
  }): Observable<Object>{
    const path = this.backendUrl+"/author/add"
    return this.httpClient.post(path, body).pipe(
      catchError(error =>  {
        return throwError(() => new Error(error.toString()))
      })
    )
  }
}
