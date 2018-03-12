import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseDetailsComponent } from './pages/courses/course-details/course-details.component';
import { LoginComponent } from './pages/login/login.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list/course-list-item/course-list-item.component';
import { AddCourseComponent } from './pages/add-course/add-course.component';
import { ServerService } from './services/server.service';
import { AuthService } from './services/auth.service';
import { CreationDateBorderDirective } from './directives/creationDateBorder.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';
import { FilterCoursesPipe } from './pipes/filter.pipe';
import { FilterOldPipe } from './pipes/filter-old.pipe';
import { CourseDateComponent } from './pages/add-course/course-date/course-date.component';
import { CourseDurationComponent } from './pages/add-course/course-duration/course-duration.component';
import { CourseAuthorsComponent } from './pages/add-course/course-authors/course-authors.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CoursesComponent,
    CourseDetailsComponent,
    LoginComponent,
    ToolboxComponent,
    CourseListComponent,
    CourseListItemComponent,
    AddCourseComponent,
    CreationDateBorderDirective,
    DurationPipe,
    SortByPipe,
    FilterCoursesPipe,
    FilterOldPipe,
    CourseDateComponent,
    CourseDurationComponent,
    CourseAuthorsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServerService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
