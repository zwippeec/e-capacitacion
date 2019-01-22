import { Component, OnInit } from '@angular/core';
import { Course } from '../interfaces/courses';

import { CourseService } from '../services/course.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cursos: Course[];
  query: string = '';

  constructor(private courseService: CourseService) {
    this.cursos = this.courseService.getCourses();
    
  }

  ngOnInit() {
  }

}
