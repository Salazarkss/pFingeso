import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IdeasComponent } from './ideas/ideas.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IdeasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ArticleComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
