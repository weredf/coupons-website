import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { AdministratorService } from 'src/app/services/administrator.service';

@Component({
  selector: 'app-administrator-customer-details',
  templateUrl: './administrator-customer-details.component.html',
  styleUrls: ['./administrator-customer-details.component.css']
})
export class AdministratorCustomerDetailsComponent implements OnInit {

  public customer!: Customer;
  public read:boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private adminService: AdministratorService, private router: Router) { }

  ngOnInit(): void {
      let customerId = this.activatedRoute.snapshot.params['id'];
      let subscription = this.adminService.getOneCustomer(customerId).subscribe({
          next: (customerFromServer)=> {
              this.customer = customerFromServer;
          },
          error: (e)=>{
              alert(e.error.message);
          },
          complete: ()=>{
              subscription.unsubscribe();
          }
      });

  }

  public update(){
      let subscription = this.adminService.updateCustomer(this.customer).subscribe({
          next: ()=> {
              alert("updated");
          },
          error: (e)=>{
              alert(e.error.message);
          },
          complete: ()=>{
              subscription.unsubscribe();
          }
      });
  }
  public delete(){
      console.log(this.customer);
      // confirm gives ok & cancel buttons, returns boolean
      if(!confirm("are you sure?")){
          return;
      }
      // proceed to delete
      let subscription = this.adminService.deleteCustomer(this.customer.id).subscribe({
          next:()=>{
              console.log("deleted company");
              this.router.navigate(["/api/ADMINISTRATOR/home"])
          },
          error:(e)=>{
              alert(e.error.message);
          },
          complete:()=>{
              subscription.unsubscribe();
          }
      });
  }

}