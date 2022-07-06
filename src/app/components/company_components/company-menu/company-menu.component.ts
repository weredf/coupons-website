import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-menu',
  templateUrl: './company-menu.component.html',
  styleUrls: ['./company-menu.component.css']
})
export class CompanyMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
