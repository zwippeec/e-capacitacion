import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../interfaces/courses';
import { CourseService } from '../services/course.service';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

	cursoId: any;
	curso: Course;
	cursos: Course[];

	constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {
		this.cursoId = this.activatedRoute.snapshot.params['cid'];
		console.log(this.cursoId);
		this.cursos = this.courseService.getCourses();
		this.curso = this.cursos.find((record) =>{
			return record.cid == this.cursoId;
		});
		console.log(this.curso);
	}

	ngOnInit() {
	}

}
