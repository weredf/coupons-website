import { Customer } from './../models/customer';
import { Company } from './../models/company';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber, timeout, Observer } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AdministratorService {

    constructor(private httpClient: HttpClient) { }

    // Methods regarding Companies

    public addCompany(company: Company): Observable<any> {
        let url = "http://localhost:8080/api/ADMINISTRATOR/add-company";
        let token: string | null = sessionStorage.getItem("token");
        let options:any = { headers: this.getOptions(token)};
        return this.httpClient.post<any>(url, company, options);
    }

    public updateCompany(company: Company): Observable<any> {
        let url = "http://localhost:8080/api/ADMINISTRATOR/update-company";
        let token: string | null = sessionStorage.getItem('token');
        let options = { headers: this.getOptions(token) };
        return this.httpClient.put(url, company, options);
    }

    public deleteCompany(companyId: number | undefined): Observable<any> {
        let token: string | null = sessionStorage.getItem('token');
        let url = "http://localhost:8080/api/ADMINISTRATOR/delete-company/" + companyId;
        let options = { headers: this.getOptions(token) };
        return this.httpClient.delete<any>(url, options);
    }

    public getOneCompany(companyId: number | undefined): Observable<Company> {
        let token: string | null = sessionStorage.getItem('token');
        let url = "http://localhost:8080/api/ADMINISTRATOR/get-company/" + companyId;
        let options = { headers: this.getOptions(token) };
        return this.httpClient.get<Company>(url, options);
    }

    public getAllCompanies(): Observable<Company[]> {
        let token: string | null = sessionStorage.getItem('token');
        let url = "http://localhost:8080/api/ADMINISTRATOR/get-all-companies";
        let options = { headers: this.getOptions(token) };
        return this.httpClient.get<Company[]>(url, options);
    }

    // Methods regarding Customers

    public addCustomer(customer: Customer): Observable<any> {
        let token: string | null = sessionStorage.getItem("token");
        let url = "http://localhost:8080/api/ADMINISTRATOR/add-customer";
        let options = { headers: this.getOptions(token) };
        return this.httpClient.post<any>(url, customer, options);
    }

    public updateCustomer(customer: Customer): Observable<any> {
        let token: string | null = sessionStorage.getItem('token');
        let url = "http://localhost:8080/api/ADMINISTRATOR/update-customer";
        let options = { headers: this.getOptions(token) };
        return this.httpClient.put(url, customer, options);
    }

    public deleteCustomer(customerId: number | undefined): Observable<any> {
        let token: string | null = sessionStorage.getItem('token');
        let url = "http://localhost:8080/api/ADMINISTRATOR/delete-customer/" + customerId;
        let options = { headers: this.getOptions(token) };
        return this.httpClient.delete<any>(url, options);
    }

    public getOneCustomer(customerId: number): Observable<Customer> {
        let token: string | null = sessionStorage.getItem('token');
        let url = "http://localhost:8080/api/ADMINISTRATOR/get-customer/" + customerId;
        let options = { headers: this.getOptions(token) };
        return this.httpClient.get<Customer>(url, options);
    }

    public getAllCustomers(): Observable<Customer[]> {
        let token: string | null = sessionStorage.getItem('token');
        let url = "http://localhost:8080/api/ADMINISTRATOR/get-all-customers";
        let options = { headers: this.getOptions(token) };
        return this.httpClient.get<Customer[]>(url, options);
    }
    
    public getOptions(token: string | null): HttpHeaders {
        // set token so it is not null
        token = token ? token : "";
        // put the token in the http headers
        let theHeaders = new HttpHeaders().set("token", token);
        return theHeaders;
    }
}
