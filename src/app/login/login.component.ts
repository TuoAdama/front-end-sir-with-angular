import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthorService} from "../services/author-service.service";
import {using} from "rxjs";
import {Author} from "../models/Author";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup
  errorMessage = ""

  constructor(private formBuilder: FormBuilder, private router: Router, private authorService: AuthorService) {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control(""),
      password: this.formBuilder.control("")
    })
  }

  onSubmit() {
    const {email, password} = this.loginForm.value;
    this.authorService.login(email, password)
      .subscribe({
        next : (value) => {
          const author: Author =  value as Author
          localStorage.setItem("author", JSON.stringify(author));
          this.router.navigateByUrl("/");
        },
        error: (error) => {
          this.errorMessage  = "Email ou mot de passe incorrect"
        }
      })
  }
}
