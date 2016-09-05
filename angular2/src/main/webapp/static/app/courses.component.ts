import {Component} from '@angular/core';
import {CourseService} from './course.service';
import {AutoGrowDirective} from './auto-grow.directive'
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'courses',
	template: `
		<h2>Courses</h2>
		{{ title }}
		<input type="text" />
		<ul>
			<li *ngFor="let course of courses | async">
				{{ course }}
			</li>
		</ul>
		`,
	providers: [CourseService]
})
export class CoursesComponent implements OnInit {
	title: string = "The title of couses page";
	courses: Observable<string[]>;
	
	constructor(private _courseService: CourseService) {
	    
	}
    
    ngOnInit(): void {
        this.getCourses();
    }
    
    getCourses(): void {
        this.courses = this._courseService.getCourses();
    }
    
    private handleError(error: any): Observable<string[]> {
        console.error('An error occurred', error); // for demo purposes only
        return Observable.of<string[]>([]);

      }

}