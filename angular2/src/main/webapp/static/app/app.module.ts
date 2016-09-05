import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }   from './app.component';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors.component';

import { CourseService } from './course.service';
import { AuthorService } from './author.service';
import { Configuration } from './app.constants';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, CoursesComponent, AuthorsComponent ],
  providers: [CourseService, AuthorService, Configuration],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }