import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ServerService {

    constructor(private httpClient: HttpClient) {}

    // getAllcourses:
    getList() {
        return this.httpClient.get('http://localhost:4002/courses');
    }

    createCourse(courseName: string, courseDescription: string) {
        return this.httpClient.post('http://localhost:4002/courses', {
                name: courseName,
                description: courseDescription,
                isTopRated: false,
                date: new Date(),
                authors: [
                  {
                    id: 5653,
                    firstName: 'Jan',
                    lastName: 'Kowalski'
                  }
                ],
                length: Math.floor(Math.random() * 1000)
              });
    } // end of create course method

    // getCourseById:
    getCourseById(id) {
        return this.httpClient.get(`http://localhost:4002/courses/?id=${Number(id)}`);
    }

    // updateCourse():
    updateCourse(id: number, courseNewName: string, courseNewDescription: string) {
        console.log('update course: ', id, courseNewName);
    }

    // deleteCourse():
    deleteCourse(id) {
        console.log('delete course: ', id);
        return this.httpClient.delete(`http://localhost:4002/courses/${Number(id)}`);
    }

}
