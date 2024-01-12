import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-left-side',
    templateUrl: './left-side.component.html',
    styleUrls: ['./left-side.component.css'],
})
export class LeftSideComponent implements OnInit{
    @Input() options: any;
    ngOnInit() {
      console.log('options', this.options)
    }
}
