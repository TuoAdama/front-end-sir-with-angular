import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthorService} from "../services/author-service.service";
import {Author} from "../models/Author";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm!: FormGroup;
  loading = false;
  constructor(private formBuilder: FormBuilder, private authorService: AuthorService, private router: Router) {
    this.registerForm = formBuilder.group({
      name: this.formBuilder.control(""),
      email: this.formBuilder.control(""),
      password: this.formBuilder.control("")
    })
  }

  onRegister() {
    this.loading = true
    const {name, email, password} = this.registerForm.value
    if(!this.registerForm.valid){
      return
    }
    const author: Author = {name, email, password}
    this.authorService.createAuthor(author).subscribe({
      next: response => {
        console.log(response);
        this.loading = false;
        this.router.navigateByUrl("/");
      },
      error: (error) => {
        console.log(error);
      }
      })

    this.router.navigateByUrl("/")
  }

}
