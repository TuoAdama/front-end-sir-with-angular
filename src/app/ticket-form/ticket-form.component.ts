import { Component, OnInit } from '@angular/core';
import {AuthorService} from "../services/author-service.service";
import {Ticket} from "../models/Ticket";
import { TicketService } from '../services/ticket.service';
import { catchError, throwError } from 'rxjs';
import { Tag } from '../models/Tag';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {

  authorId!: number

  ticket: Ticket = new Ticket()
  tags: Tag[] = []
  tagId?: number
  formGroup: FormGroup

  constructor(private authorService: AuthorService,
              private ticketService: TicketService,
              private fb: FormBuilder) {
    this.authorId = authorService.getAuthor().id!
    this.formGroup = this.fb.group({
      title: "",
      content: "",
      tagId: "",
    })
  }
  
  ngOnInit(): void {
    this.ticketService.getTags().pipe(
      catchError(error =>  {
        return throwError(() => new Error(error.toString()))
      })
    ).subscribe(value => {        
        this.tags = <Tag[]>value
    })
  }

  onSubmit(form: any): void {
    console.log(form);
  }

}
