import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { Coupon } from 'src/app/models/coupon';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-coupon-details',
  templateUrl: './company-coupon-details.component.html',
  styleUrls: ['./company-coupon-details.component.css']
})
export class CompanyCouponDetailsComponent implements OnInit {

  public coupon!: Coupon;
  public read:boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private companyService: CompanyService, private router: Router) { }

  ngOnInit(): void {
    //   let couponId = this.activatedRoute.snapshot.params['id'];
    //   let subscription = this.companyService.getOneCompany(companyId).subscribe({
    //       next: (companyFromServer)=> {
    //           this.company = companyFromServer;
    //       },
    //       error: (e)=>{
    //           alert(e.error.message);
    //       },
    //       complete: ()=>{
    //           subscription.unsubscribe();
    //       }
    //   });

  }

  public update(){
      let subscription = this.companyService.updateCoupon(this.coupon).subscribe({
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
      console.log(this.coupon);
      // confirm gives ok & cancel buttons, returns boolean
      if(!confirm("are you sure?")){
          return;
      }
      // proceed to delete
      let subscription = this.companyService.deleteCoupon(this.coupon.id).subscribe({
          next:()=>{
              console.log("deleted company");
              this.router.navigate(["/api/COMPANY/home"])
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