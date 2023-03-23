import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Ticket } from 'src/app/models/Ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent implements OnInit {

    ticket!: Ticket;

    /**
     *
     */
    constructor(private route: ActivatedRoute, private ticketService: TicketService) {
      
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
          console.log(this.ticket)
      })
    }

}
