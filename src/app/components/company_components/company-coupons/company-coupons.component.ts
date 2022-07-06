import { Subscription } from 'rxjs';
import { Company } from '../../../models/company';
import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-coupons',
  templateUrl: './company-coupons.component.html',
  styleUrls: ['./company-coupons.component.css']
})
export class CompanyCouponsComponent implements OnInit {

  public company: Company = new Company(0, '', '', '');
  public startDate = new Date("2022-01-01");
  public endDate = new Date("2023-01-01");
  public coupon: Coupon = new Coupon(0, this.company,'','','', this.startDate, this.endDate, 10, 10, '');
  constructor(private companyService :CompanyService) {
  }

  ngOnInit(): void {
    // this.company = this.companyService.getCompanyDetails();
  }

  public addCoupon() {
      console.log(this.coupon);
      let subscription = this.companyService.addCoupon(this.coupon).subscribe({
          next:(id)=>{
              console.log("added coupon: " + id);
              alert("coupon added"); // pop-up success
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
