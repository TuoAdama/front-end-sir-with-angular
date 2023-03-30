import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ProfileComponent } from './profile/profile.component';
import {RouterModule, Routes} from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketComponent } from './ticket/ticket.component';
import { AuthorComponent } from './author/author.component';
import { TicketItemComponent } from './ticket-item/ticket-item.component';
import { TicketFormComponent } from './ticket-form/ticket-form.component';
import {HttpClientModule} from "@angular/common/http";
import { SingleTicketComponent } from './single-ticket/single-ticket.component';
import {NotFoundComponent} from "./not-found/not-found.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgSelectModule } from '@ng-select/ng-select';
import { EditTicketComponent } from './pages/edit-ticket/edit-ticket.component';
import { CreateTicketComponent } from './pages/create-ticket/create-ticket.component';
import {AuthorFormComponent} from "./author-form/author-form.component";
import { CommentItemComponent } from './comment-item/comment-item.component';


const appRoutes: Routes = [
  {path: "", component: DashboardComponent},
  {path: "tickets", component: TicketComponent},
  {path: "ticket/create", component: CreateTicketComponent},
  {path: "ticket/:id", component: SingleTicketComponent},
  {path: "ticket/edit/:id", component: EditTicketComponent},
  {path: "authors", component: AuthorComponent},
  {path: "create-ticket", component: TicketFormComponent},
  {path: "create-author", component: AuthorFormComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    SearchbarComponent,
    ProfileComponent,
    DashboardComponent,
    TicketComponent,
    AuthorComponent,
    AuthorFormComponent,
    TicketItemComponent,
    TicketFormComponent,
    SingleTicketComponent,
    EditTicketComponent,
    CreateTicketComponent,
    CommentItemComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    NgSelectModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
