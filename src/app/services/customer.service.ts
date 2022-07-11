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
        // get the token from storage
        let token: string | null = sessionStorage.getItem('token');
        let url = "http://localhost:8080/api/CUSTOMER/purchase-coupon/" + couponId;
        let options = { headers: this.getOptions(token) };
        return this.httpClient.put(url, couponId, options);
    }


    public getCustomerCoupons(): Observable<Coupon[]> {
        let token: string | null = sessionStorage.getItem('token');
        let url = "http://localhost:8080/api/CUSTOMER/get-customer-coupons";
        let options = { headers: this.getOptions(token) };
        return this.httpClient.get<Coupon[]>(url, options);
    }

    public getCustomerCouponsByCategory(category: string): Observable<Coupon[]> {
        let token: string | null = sessionStorage.getItem('token');
        let url = "http://localhost:8080/api/CUSTOMER/get-customer-coupons/" + category;
        let options = { headers: this.getOptions(token) };
        return this.httpClient.get<Coupon[]>(url, options);
    }

    public getCustomerCouponsUpToMaxPrice(maxPrice: number): Observable<Coupon[]> {
        let token: string | null = sessionStorage.getItem('token');
        let url = "http://localhost:8080/api/CUSTOMER/get-customer-coupons/" + maxPrice;
        let options = { headers: this.getOptions(token) };
        return this.httpClient.get<Coupon[]>(url, options);
    }
    
    public getCustomerDetails(): Observable<Customer> {
        let token: string | null = sessionStorage.getItem('token');
        let url = "http://localhost:8080/api/CUSTOMER/get-customer-details";
        let options = { headers: this.getOptions(token) };
        return this.httpClient.get<Customer>(url, options);
    }

    public getOptions(token: string | null): HttpHeaders {
        // set token so it is not null
        token = token ? token : "";
        // put the token in the http headers
        let theHeaders = new HttpHeaders().set("token", token);
        return theHeaders;
    }
}
