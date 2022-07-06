import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    private title: Title;

    constructor(title: Title) { 
        this.title = title;
    }

    ngOnInit(): void {
        this.title.setTitle("About");
    }

    public display(event: string) {
        alert("image source: " + event);
    }
}
