import {Component, OnInit} from '@angular/core';
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";
import {Author} from "../models/Author";
import {AuthorService} from "../services/author-service";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit{

  authors : Author[] =[];
  constructor(private authorService: AuthorService) {
  }

  ngOnInit() {
    this.authorService.getAuthors()
      .pipe(
        catchError(error => {
          return throwError(() => new Error(error.toString()))
        })
      )
      .subscribe((value:Object) => {
        this.authors = <Author[]>value;
      })
  }
}
