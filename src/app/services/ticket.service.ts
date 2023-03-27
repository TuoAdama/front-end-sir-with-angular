import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Ticket} from "../models/Ticket";
import {Tag} from "../models/Tag";


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private backendUrl:string = "http://localhost:8080";
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getTickets(): Observable<Object>{
    return this.httpClient.get(this.backendUrl+"/ticket/all")
  }

  getTicketById(id: number|string|null): Observable<Ticket>{
    const path = this.backendUrl+"/ticket/find/"+id
    return this.httpClient.get(path);
  }

  getTags(): Observable<Object>{
    const path = this.backendUrl+ "/tag/all"
    return this.httpClient.get(path);
  }

  createTicket(body: {
    id?: number,
    title: string,
    content: string,
    author: {id: number},
    tags: {id: number}[]
  }): Observable<Object>{
    const path = this.backendUrl+"/ticket/add"
    return this.httpClient.post(path, body).pipe(
      catchError(error =>  {
        return throwError(() => new Error(error.toString()))
      })
    )
  }

  createTag(tag: Tag): Observable<any>{
    const path = this.backendUrl+"/tag/add"
    this.httpClient.post(path, tag)
    return this.httpClient.post(path, tag)
      .pipe(
        catchError(error =>  {
          return throwError(() => new Error(error.toString()))
        })
      )
  }

  updateTicket(body: any): Observable<Object>{
    const path = this.backendUrl+"/ticket/update";
    return this.httpClient.put(path, body)
    .pipe(
      catchError(error =>  {
        return throwError(() => new Error(error.toString()))
      })
    )
  }

}
