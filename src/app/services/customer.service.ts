import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber, timeout, Observer } from 'rxjs';
import { Coupon } from '../models/coupon';
import { Customer } from '../models/customer';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {

    constructor(private httpClient: HttpClient) { }

    public purchaseCoupon(couponId: number): Observable<any> {
        let url = "http://localhost:8080/api/CUSTOMER/purchase-coupon/" + couponId;
        let token: string | null = sessionStorage.getItem('token');
        token = token ? token : "";
        let theHeaders = new HttpHeaders({ token: token });
        let options = { headers: theHeaders };
        return this.httpClient.put(url, couponId, options);
    }


    public getCustomerCoupons(): Observable<Coupon[]> {
        // get the token from storage
        let token: string | null = sessionStorage.getItem('token');
        // set token so it is not null
        token = token ? token : "";
        let url = "http://localhost:8080/api/CUSTOMER/get-customer-coupons";
        // put the token in the http headers
        let theHeaders = new HttpHeaders().set("token", token);
        let options = { headers: theHeaders };
        return this.httpClient.get<Coupon[]>(url, options);
    }

    public getCustomerCouponsByCategory(category: string): Observable<Coupon[]> {
        let token: string | null = sessionStorage.getItem('token');
        token = token ? token : "";
        let url = "http://localhost:8080/api/CUSTOMER/get-customer-coupons/" + category;
        let theHeaders = new HttpHeaders().set("token", token);
        let options = { headers: theHeaders };
        return this.httpClient.get<Coupon[]>(url, options);
    }

    public getCustomerCouponsUpToMaxPrice(maxPrice: number): Observable<Coupon[]> {
        let token: string | null = sessionStorage.getItem('token');
        token = token ? token : "";
        let url = "http://localhost:8080/api/CUSTOMER/get-customer-coupons/" + maxPrice;
        let theHeaders = new HttpHeaders().set("token", token);
        let options = { headers: theHeaders };
        return this.httpClient.get<Coupon[]>(url, options);
    }
    
    public getCustomerDetails(): Observable<Customer> {
        let token: string | null = sessionStorage.getItem('token');
        token = token ? token : "";
        let url = "http://localhost:8080/api/CUSTOMER/get-customer-details";
        let theHeaders = new HttpHeaders().set("token", token);
        let options = { headers: theHeaders };
        return this.httpClient.get<Customer>(url, options);
    }
}
