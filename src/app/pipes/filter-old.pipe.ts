import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterOld'
})

export class FilterOldPipe implements PipeTransform {
    transform(dataToTransform: any[]) {
        return dataToTransform.filter((course) => {
            return new Date(course.date).getTime() > new Date().getTime() - 14 * 86400000;
        });
    }
}
