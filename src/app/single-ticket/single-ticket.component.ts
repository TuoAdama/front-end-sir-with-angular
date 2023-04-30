import {Component, OnInit} from '@angular/core';
import {TicketService} from "../services/ticket.service";
import {Ticket} from "../models/Ticket";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Observable, switchMap} from "rxjs";
import {AuthorService} from "../services/author-service.service";
import {NgForm} from "@angular/forms"
import {Comment} from "../models/Comment"

@Component({
  selector: 'app-single-ticket',
  templateUrl: './single-ticket.component.html',
  styleUrls: ['./single-ticket.component.css']
})
export class SingleTicketComponent implements OnInit{

  ticket?: Ticket
  loading: boolean = false
  commentContent: string = ""

  comments: Comment[] = [];

  constructor(private ticketService: TicketService,
              private route: ActivatedRoute,
              private router:Router,
              private authorService: AuthorService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = params.get("id");
        if(id != null){
          return this.ticketService.getTicketById(id)
        }
        return new Observable<Ticket>()
      })
    ).subscribe((value: Ticket) => {
        this.loading = false;
        this.ticket = value
    })
  }

  onComment(form: NgForm){
    const author = this.authorService.getAuthor();
    if(!author){
      this.router.navigateByUrl("/login");
      return
    }
    if(!form.valid) return
    const authorId = author.id
    const body = {
      ticket:{
        id: this.ticket?.id!
      },
      author:{
        id: authorId!
      },
      content: this.commentContent
    }
    this.ticketService.comment(body).subscribe((value) => {
        const res: Comment = value as Comment;
        this.comments.push(res)
    })
  }
}
