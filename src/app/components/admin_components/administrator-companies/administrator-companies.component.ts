import { Subscription } from 'rxjs';
import { AdministratorService } from './../../../services/administrator.service';
import { Company } from './../../../models/company';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrator-companies',
  templateUrl: './administrator-companies.component.html',
  styleUrls: ['./administrator-companies.component.css']
})
export class AdministratorCompaniesComponent implements OnInit {

    public company: Company = new Company(0,'','','');
  constructor(private adminService :AdministratorService) { }

  ngOnInit(): void {
  }

  public addCompany() {
      // this.company.id = 0;
      console.log(this.company);
      let subscription = this.adminService.addCompany(this.company).subscribe({
          next:(id)=>{
              console.log("added company: " + id);
              alert("company added"); // pop-up success
          },
          error:(e)=>{
              console.dir(e);
              alert(e.error.message); // pop-up error
            // alert(JSON.parse(e.error).message);
          },
          complete:()=>{
              subscription.unsubscribe();
          }
      })
  }
}
