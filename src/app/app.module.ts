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


const appRoutes: Routes = [
  {path: "dashboard", component: DashboardComponent},
  {path: "tickets", component: TicketComponent},
  {path: "authors", component: AuthorComponent},
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
