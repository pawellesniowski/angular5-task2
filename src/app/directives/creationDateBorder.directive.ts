import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[appCreationDateBorder]'
})

export class CreationDateBorderDirective implements OnInit {
    @Input() createdDate: string;

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        this.borderColor(this.createdDate);
    }

    borderColor(createdDate) {
        const createdDateMS = new Date(createdDate).getTime();
        const currentDateMS = new Date().getTime();
        const fourteenDaysMS = 14 * 86400000;

        // if createdDate<new Date() && createdDate>= new Date() - 14 days ??  ..... green bordeer
        if (createdDateMS < currentDateMS && createdDateMS >= currentDateMS - fourteenDaysMS) {
            this.el.nativeElement.style.borderColor = 'green';
        } else if (createdDateMS > currentDateMS) {
            this.el.nativeElement.style.borderColor = 'blue';
        }

    }

}
