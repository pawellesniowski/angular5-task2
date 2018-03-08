import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'durationPipe'
})

export class DurationPipe implements PipeTransform {
    transform (dataToTransform: any) {
        console.log('data to transform from pipe:  ', dataToTransform);

        const hours = Math.floor(dataToTransform / 60);
        const minuts = dataToTransform - (hours * 60);

        return hours !== 0 ? hours + 'h ' + minuts + 'min' : minuts + 'min' ;
    }
}
