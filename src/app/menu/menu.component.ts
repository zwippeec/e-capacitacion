import { Component, OnInit } from '@angular/core';
import { Course } from '../interfaces/courses';

import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
	
	cursos: Course[];
	query: string = '';
	
   constructor(private courseService: CourseService) {
    this.cursos = this.courseService.getCourses();
    
  }


  ngOnInit() {
  }

}
