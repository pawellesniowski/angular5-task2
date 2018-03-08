import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortByPipe'
})

export class SortByPipe implements PipeTransform {
    transform (dataToTransform) {
        return dataToTransform.sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
    }
}
