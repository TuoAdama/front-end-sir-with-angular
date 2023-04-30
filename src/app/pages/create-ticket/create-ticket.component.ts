import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent {
  constructor(private router: Router) {
    console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")
  }

}
