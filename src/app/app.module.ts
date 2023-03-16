import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ProfileComponent } from './profile/profile.component';
import {Route, RouterModule, Routes} from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketComponent } from './ticket/ticket.component';
import { AuthorComponent } from './author/author.component';
import { TicketItemComponent } from './ticket-item/ticket-item.component';
import { TicketFormComponent } from './ticket-form/ticket-form.component';
import { AuthorFormComponent } from './author-form/author-form.component';


const appRoutes: Routes = [
  {path: "", component: DashboardComponent},
  {path: "tickets", component: TicketComponent},
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
    TicketItemComponent,
    TicketFormComponent,
    AuthorFormComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
