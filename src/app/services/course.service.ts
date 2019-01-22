import { Injectable } from '@angular/core';
import { Course } from '../interfaces/courses';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
	cursos: Course[];
  constructor() {
  	let curso1: Course = {
      name: 'Curso 1',
      nickname: 'c1',
      enabled: true,
      cid: 1
    };
    let curso2: Course = {
      name: 'Curso 2',
      nickname: 'c2',
      enabled: true,
      cid: 2
    };
    let curso3: Course = {
      name: 'Curso 3',
      nickname: 'c3',
      enabled: true,
      cid: 3
    };
    let curso4: Course = {
      name: 'Curso 4',
      nickname: 'c4',
      enabled: false,
      cid: 4
    };
    let curso5: Course = {
      name: 'Curso 5',
      nickname: 'c5',
      enabled: false,
      cid: 5
    };
    this.cursos = [curso1, curso2, curso3, curso4, curso5];
  }
  getCourses(){
  	return this.cursos;
  }
}
