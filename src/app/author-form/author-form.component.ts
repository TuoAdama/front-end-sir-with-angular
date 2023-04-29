import {Component, Input, OnInit} from '@angular/core';
import {AuthorService} from "../services/author-service";
import {catchError, lastValueFrom, throwError} from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {Author} from "../models/Author";
import {Tag} from "../models/Tag";
import {TicketService} from "../services/ticket.service";

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})

export class AuthorFormComponent {


  loading = false

  constructor(private authorService: AuthorService, private router: Router) {
  }

  onSubmit(form: NgForm): void {
    console.log(form)
    if(!form.valid){
      return
    }
    this.authorService.createAuthor({
      firstname: form.value.firstName,
      lastname: form.value.lastName
    })
    this.loading = true
  }

  handleAfterSubmit = (value: any) => {
    this.loading = false
    this.router.navigate(['/authors'])
  }
}
