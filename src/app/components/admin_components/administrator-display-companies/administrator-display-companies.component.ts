import { AdministratorService } from './../../../services/administrator.service';
import { Company } from './../../../models/company';
import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-administrator-display-companies',
  templateUrl: './administrator-display-companies.component.html',
  styleUrls: ['./administrator-display-companies.component.css']
})
export class AdministratorDisplayCompaniesComponent implements OnInit {

    public companies!: Company[];
    private subscription!: Subscription;
  constructor(private title: Title,
    private adminService: AdministratorService,
    private router: Router) { }

    ngOnInit(): void {
        this.title.setTitle("Companies");
        let subscriber: Partial<Observer<Company[]>> = {
            next:(arr)=>{
                this.companies = arr;
            },
            complete: ()=>{
                this.subscription.unsubscribe();
                console.log("unsubscribed");
                
            },
            error: (e)=>{
                alert(e.error.message);
                this.router.navigate(["api/ADMINISTRATOR/home"]);
            }
        };
        let observable: Observable<Company[]> = this.adminService.getAllCompanies();
        this.subscription = observable.subscribe(subscriber); 
    }
}