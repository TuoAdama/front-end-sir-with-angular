import {Component, OnInit} from '@angular/core';
import {TicketService} from "../services/ticket.service";
import {catchError} from "rxjs/operators"
import {throwError} from "rxjs";
import {Ticket} from "../models/Ticket";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit{
  tickets: Ticket[] = [];

  constructor(private ticketService: TicketService) {
  }

  ngOnInit(): void {
    this.ticketService.getTickets()
      .pipe(
        catchError(error => {
          return throwError(() => new Error(error.toString()))
        })
      )
      .subscribe((value:Object) => {
          this.tickets = <Ticket[]>value;
      })
  }

}
