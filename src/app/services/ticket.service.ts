import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ticket} from "../models/Ticket";


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

}
