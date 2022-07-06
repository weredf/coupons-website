import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Coupon } from 'src/app/models/coupon';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-display-coupons',
  templateUrl: './company-display-coupons.component.html',
  styleUrls: ['./company-display-coupons.component.css']
})
export class CompanyDisplayCouponsComponent implements OnInit {

    public coupons!: Coupon[];
    private subscription!: Subscription;
  constructor(private title: Title,
    private companyService: CompanyService,
    private router: Router) { }

    ngOnInit(): void {
        this.title.setTitle("Coupons");
        let subscriber: Partial<Observer<Coupon[]>> = {
            next:(arr)=>{
                this.coupons = arr;
            },
            complete: ()=>{
                this.subscription.unsubscribe();
                console.log("unsubscribed");
                
            },
            error: (e)=>{
                alert(e.error.message);
                this.router.navigate(["api/COMPANY/home"]);
            }
        };
        let observable: Observable<Coupon[]> = this.companyService.getCompanyCoupons();
        this.subscription = observable.subscribe(subscriber); 
    }
}