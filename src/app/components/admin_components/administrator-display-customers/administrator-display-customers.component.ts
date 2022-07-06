import { Customer } from './../../../models/customer';
import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { AdministratorService } from 'src/app/services/administrator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrator-display-customers',
  templateUrl: './administrator-display-customers.component.html',
  styleUrls: ['./administrator-display-customers.component.css']
})
export class AdministratorDisplayCustomersComponent implements OnInit {

    public customers!: Customer[];
    private subscription!: Subscription;
  constructor(private title: Title,
    private adminService: AdministratorService,
    private router: Router) { }

    ngOnInit(): void {
        this.title.setTitle("Customers");
        let subscriber: Partial<Observer<Customer[]>> = {
            next:(arr)=>{
                this.customers = arr;
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
        let observable: Observable<Customer[]> = this.adminService.getAllCustomers();
        this.subscription = observable.subscribe(subscriber); 
    }

}
