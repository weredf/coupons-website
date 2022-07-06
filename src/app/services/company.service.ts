import { Company } from '../models/company';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber, timeout, Observer } from 'rxjs';
import { Coupon } from '../models/coupon';

@Injectable({
    providedIn: 'root'
})
export class CompanyService {

    constructor(private httpClient: HttpClient) { }

    public addCoupon(coupon: Coupon): Observable<any> {
        let url = "http://localhost:8080/api/COMPANY/add-coupon/";
        let token: string | null = sessionStorage.getItem("token");
        token = token ? token : ""; // make sure token is not null
        let theHeaders = new HttpHeaders({ token: token });
        let options = { headers: theHeaders }; // responseType:'json', no need to define
        return this.httpClient.post<any>(url, coupon, options);
    }

    public updateCoupon(coupon: Coupon): Observable<any> {
        let url = "http://localhost:8080/api/COMPANY/update-coupon/";
        let token: string | null = sessionStorage.getItem('token');
        token = token ? token : "";
        let theHeaders = new HttpHeaders({ token: token });
        let options = { headers: theHeaders };
        return this.httpClient.put<any>(url, coupon, options);
    }

    public deleteCoupon(couponId: number | undefined): Observable<any> {
        let token: string | null = sessionStorage.getItem('token');
        token = token ? token : "";
        let url = "http://localhost:8080/api/COMPANY/delete-coupon/" + couponId;
        let theHeaders = new HttpHeaders().set("token", token);
        let options = { headers: theHeaders };
        return this.httpClient.delete<any>(url, options);
    }

    public getCompanyCoupons(): Observable<Coupon[]> {
        // get the token from storage
        let token: string | null = sessionStorage.getItem('token');
        // set token so it is not null
        token = token ? token : "";
        let url = "http://localhost:8080/api/COMPANY/get-company-coupons";
        // put the token in the http headers
        let theHeaders = new HttpHeaders().set("token", token);
        let options = { headers: theHeaders };
        return this.httpClient.get<Coupon[]>(url, options);
    }

    public getCompanyCouponsByCategory(category: string): Observable<Coupon[]> {
        let token: string | null = sessionStorage.getItem('token');
        token = token ? token : "";
        let url = "http://localhost:8080/api/COMPANY/get-company-coupons/" + category;
        let theHeaders = new HttpHeaders().set("token", token);
        let options = { headers: theHeaders };
        return this.httpClient.get<Coupon[]>(url, options);
    }

    public getCompanyCouponsUpToMaxPrice(maxPrice: number): Observable<Coupon[]> {
        let token: string | null = sessionStorage.getItem('token');
        token = token ? token : "";
        let url = "http://localhost:8080/api/COMPANY/get-company-coupons/" + maxPrice;
        let theHeaders = new HttpHeaders().set("token", token);
        let options = { headers: theHeaders };
        return this.httpClient.get<Coupon[]>(url, options);
    }
    
    public getCompanyDetails(): Observable<Company> {
        let token: string | null = sessionStorage.getItem('token');
        token = token ? token : "";
        let url = "http://localhost:8080/api/COMPANY/get-company-details";
        let theHeaders = new HttpHeaders().set("token", token);
        let options = { headers: theHeaders };
        return this.httpClient.get<Company>(url, options);
    }

}
