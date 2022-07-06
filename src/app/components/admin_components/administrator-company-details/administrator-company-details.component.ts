import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { AdministratorService } from 'src/app/services/administrator.service';

@Component({
  selector: 'app-administrator-company-details',
  templateUrl: './administrator-company-details.component.html',
  styleUrls: ['./administrator-company-details.component.css']
})
export class AdministratorCompanyDetailsComponent implements OnInit {

  public company!: Company;
  public read:boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private adminService: AdministratorService, private router: Router) { }

  ngOnInit(): void {
      let companyId = this.activatedRoute.snapshot.params['id'];
      let subscription = this.adminService.getOneCompany(companyId).subscribe({
          next: (companyFromServer)=> {
              this.company = companyFromServer;
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
      let subscription = this.adminService.updateCompany(this.company).subscribe({
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
      console.log(this.company);
      // confirm gives ok & cancel buttons, returns boolean
      if(!confirm("are you sure?")){
          return;
      }
      // proceed to delete
      let subscription = this.adminService.deleteCompany(this.company.id).subscribe({
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