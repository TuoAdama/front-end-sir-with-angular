import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {AuthorService} from "../services/author-service.service";
import {Ticket} from "../models/Ticket";
import { TicketService } from '../services/ticket.service';
import {catchError, lastValueFrom, throwError} from 'rxjs';
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

  @Input() ticket: Ticket = new Ticket()
  tags: Tag[] = []
  tagId?: number
  loading: boolean = false
  @Input() edit = false;

  selectedTags: number[] = []

  constructor(private authorService: AuthorService,
              private ticketService: TicketService,
              private router: Router) {
    this.onAddTag.bind(this)
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

    if(this.edit){
      this.authorId = this.ticket.author!.id!
      this.selectedTags = this.ticket.tags!.map(item => item.id!)
      console.log(this.selectedTags);
    }
  }

  onSubmit(form: NgForm): void {

    if(!form.valid){
      return
    }
    this.loading = true

    const {title, content} = this.ticket
    const tagIds = this.selectedTags.map(id => ({id}))
    const data = {
      title: title!,
      content: content!,
      author: {
        id: this.authorService.getAuthor().id!
      },
      tags: [...tagIds]
    }

    this.ticketService.createTicket(data).subscribe((value) => {
      this.loading = false
      this.router.navigate(['/tickets'])
    })
  }


  onAddTag = (label: string): Promise<Tag> => {
    const tag = new Tag();
    tag.label = label;
    return lastValueFrom(this.ticketService.createTag(tag))
  }

}
