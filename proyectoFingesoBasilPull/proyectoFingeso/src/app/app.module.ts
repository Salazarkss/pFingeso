import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
 import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IdeasComponent } from './ideas/ideas.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';

 @NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IdeasComponent,
      ArticleComponent

=======

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BrowserModule,
    FormsModule,
    HttpModule
>>>>>>> abec7bec95dc1c12c627de0ba34b1b0d7aa16208
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
<<<<<<< HEAD
export class AppModule { }
=======
export class AppModule { }
>>>>>>> abec7bec95dc1c12c627de0ba34b1b0d7aa16208