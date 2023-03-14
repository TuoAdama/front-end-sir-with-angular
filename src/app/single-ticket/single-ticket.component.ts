import {Component, OnInit} from '@angular/core';
import {TicketService} from "../services/ticket.service";
import {Ticket} from "../models/Ticket";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Observable, switchMap} from "rxjs";

@Component({
  selector: 'app-single-ticket',
  templateUrl: './single-ticket.component.html',
  styleUrls: ['./single-ticket.component.css']
})
export class SingleTicketComponent implements OnInit{

  ticket?: Ticket

  constructor(private ticketService: TicketService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = params.get("id");
        if(id != null){
          return this.ticketService.getTicketById(id)
        }
        return new Observable<Ticket>()
      })
    ).subscribe((value: Ticket) => {
        this.ticket = value
        console.log(this.ticketService)
    })
  }
}
