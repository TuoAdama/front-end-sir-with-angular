import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthorService} from "../services/author-service.service";
import {Ticket} from "../models/Ticket";
import { TicketService } from '../services/ticket.service';
import { catchError, throwError } from 'rxjs';
import { Tag } from '../models/Tag';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

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
  loading: boolean = false

  tagsExample = [
    {id: 1, name: 'Tag 1'},
    {id: 2, name: 'Tag 2'},
    {id: 3, name: 'Tag 3'},
    {id: 4, name: 'Tag 4'},
    {id: 5, name: 'Tag 5'},
  ]

  selectedTags: [] = []

  constructor(private authorService: AuthorService,
              private ticketService: TicketService,
              private router: Router) {
    this.authorId = authorService.getAuthor().id!
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

  onSubmit(form: NgForm): void {

    if(!form.valid){

      return
    }
    this.loading = true

    const {title, content} = this.ticket

    const data = {
      title: title!,
      content: content!,
      author: {
        id: this.authorService.getAuthor().id!
      },
      tags: [
        {'id': this.tagId!}
      ]
    }

    this.ticketService.createTicket(data).subscribe((value) => {
      this.loading = false
      this.router.navigate(['/tickets'])
    })
  }

}
