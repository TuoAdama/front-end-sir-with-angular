import { Component } from '@angular/core';
import {Author} from "../models/Author";
import {AuthorService} from "../services/author-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  currentAuthor!: Author;
  constructor(private authorService: AuthorService, private router: Router) {
    const author = authorService.getAuthor();
    if(author == undefined){
      router.navigateByUrl("/login")
      return
    }
    this.currentAuthor = author!
  }
}
