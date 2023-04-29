import { Component } from '@angular/core';
import {Author} from "../models/Author";
import {AuthorService} from "../services/author-service.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  author: Author;
  constructor(private authorService: AuthorService) {
    this.author = authorService.currentUser!
  }
}
