import { Injectable } from '@angular/core';
import {Author} from "../models/Author";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { }
  getAuthor(): Author{
    const author = new Author();
    author.id = 1
    author.name = "Adama TUO"
    return author
  }
}
