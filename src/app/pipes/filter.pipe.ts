import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterCourses'
})

export class FilterCoursesPipe implements PipeTransform {
    searchTerm = 'Angular';
    transform(dataToFilter, searchTerm) {
        return dataToFilter.reverse();
    }
}
