import { AdministratorService } from './../../../services/administrator.service';
import { Customer } from './../../../models/customer';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-administrator-customers',
    templateUrl: './administrator-customers.component.html',
    styleUrls: ['./administrator-customers.component.css']
})
export class AdministratorCustomersComponent implements OnInit {

    public customer: Customer = new Customer();
    constructor(private adminService: AdministratorService) { }

    ngOnInit(): void {
    }

    public addCustomer() {
        this.customer.id = 0;
        console.log(this.customer);
        let subscription = this.adminService.addCustomer(this.customer).subscribe({
            next: (id) => {
                console.log("added customer: " + id);
                alert("customer added: " + id); // pop-up success
            },
            error: (e) => {
                console.dir(e);
                alert(e.error.message); // pop-up error
            },
            complete: () => {
                subscription.unsubscribe();
            }
        })
    }
}
