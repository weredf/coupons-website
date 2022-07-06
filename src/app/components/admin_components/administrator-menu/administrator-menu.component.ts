import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-administrator-menu',
    templateUrl: './administrator-menu.component.html',
    styleUrls: ['./administrator-menu.component.css']
})
export class AdministratorMenuComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    
}
