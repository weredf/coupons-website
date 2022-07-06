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
        token = token ? token : ""; // make sure token is not null
        // let theHeaders = new HttpHeaders({ 'Content-Type': 'application/json', token: token });
        let theHeaders = new HttpHeaders({ token: token });
        let options:any = { headers: theHeaders}; // responseType:'json', no need to define //, responseType: 'text' as 'json'
        return this.httpClient.post<any>(url, company, options);
    }

    public updateCompany(company: Company): Observable<any> {
        let url = "http://localhost:8080/api/ADMINISTRATOR/update-company";
        let token: string | null = sessionStorage.getItem('token');
        token = token ? token : "";
        let theHeaders = new HttpHeaders({ token: token });
        let options = { headers: theHeaders };
        return this.httpClient.put(url, company, options);
    }

    public deleteCompany(companyId: number | undefined): Observable<any> {
        let token: string | null = sessionStorage.getItem('token');
        token = token ? token : "";
        let url = "http://localhost:8080/api/ADMINISTRATOR/delete-company/" + companyId;
        let theHeaders = new HttpHeaders().set("token", token);
        let options = { headers: theHeaders };
        return this.httpClient.delete<any>(url, options);
    }

    public getOneCompany(companyId: number | undefined): Observable<Company> {
        // get the token from storage
        let token: string | null = sessionStorage.getItem('token');
        // set token so it is not null
        token = token ? token : "";
        let url = "http://localhost:8080/api/ADMINISTRATOR/get-company/" + companyId;
        // put the token in the http headers
        let theHeaders = new HttpHeaders().set("token", token);
        let options = { headers: theHeaders };
        return this.httpClient.get<Company>(url, options);
    }

    public getAllCompanies(): Observable<Company[]> {
        // get the token from storage
        let token: string | null = sessionStorage.getItem('token');
        // set token so it is not null
        token = token ? token : "";
        let url = "http://localhost:8080/api/ADMINISTRATOR/get-all-companies";
        // put the token in the http headers
        let theHeaders = new HttpHeaders().set("token", token);
        let options = { headers: theHeaders };
        return this.httpClient.get<Company[]>(url, options);
    }

    // Methods regarding Customers

    public addCustomer(customer: Customer): Observable<any> {
        let url = "http://localhost:8080/api/ADMINISTRATOR/add-customer";
        let token: string | null = sessionStorage.getItem("token");
        token = token ? token : ""; // make sure token is not null
        let theHeaders = new HttpHeaders({ token: token });
        let options = { headers: theHeaders }; // responseType:'json', no need to define
        return this.httpClient.post<any>(url, customer, options);
    }

    public updateCustomer(customer: Customer): Observable<any> {
        let url = "http://localhost:8080/api/ADMINISTRATOR/update-customer";
        let token: string | null = sessionStorage.getItem('token');
        token = token ? token : "";
        let theHeaders = new HttpHeaders({ token: token });
        let options = { headers: theHeaders };
        return this.httpClient.put(url, customer, options);
    }

    public deleteCustomer(customerId: number | undefined): Observable<any> {
        let token: string | null = sessionStorage.getItem('token');
        token = token ? token : "";
        let url = "http://localhost:8080/api/ADMINISTRATOR/delete-customer/" + customerId;
        let theHeaders = new HttpHeaders().set("token", token);
        let options = { headers: theHeaders };
        return this.httpClient.delete<any>(url, options);
    }

    public getOneCustomer(customerId: number): Observable<Customer> {
        // get the token from storage
        let token: string | null = sessionStorage.getItem('token');
        // set token so it is not null
        token = token ? token : "";
        let url = "http://localhost:8080/api/ADMINISTRATOR/get-customer/" + customerId;
        // put the token in the http headers
        let theHeaders = new HttpHeaders().set("token", token);
        let options = { headers: theHeaders };
        return this.httpClient.get<Customer>(url, options);
    }

    public getAllCustomers(): Observable<Customer[]> {
        // get the token from storage
        let token: string | null = sessionStorage.getItem('token');
        // set token so it is not null
        token = token ? token : "";
        let url = "http://localhost:8080/api/ADMINISTRATOR/get-all-customers";
        // put the token in the http headers
        let theHeaders = new HttpHeaders().set("token", token);
        let options = { headers: theHeaders };
        return this.httpClient.get<Customer[]>(url, options);
    }
}
