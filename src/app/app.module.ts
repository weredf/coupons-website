import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { Page404Component } from './components/page404/page404.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { HttpClientModule } from "@angular/common/http";
import { RootComponent } from './components/root/root.component';
import { LoginComponent } from './components/login/login.component';
import { CompanyLayoutComponent } from './components/company_components/company-layout/company-layout.component';
import { AdministratorHomeComponent } from './components/admin_components/administrator-home/administrator-home.component';
import { AdministratorLayoutComponent } from './components/admin_components/administrator-layout/administrator-layout.component';
import { AdministratorMenuComponent } from './components/admin_components/administrator-menu/administrator-menu.component';
import { CompanyHomeComponent } from './components/company_components/company-home/company-home.component';
import { CompanyMenuComponent } from './components/company_components/company-menu/company-menu.component';
import { CustomerHomeComponent } from './components/customer_components/customer-home/customer-home.component';
import { CustomerLayoutComponent } from './components/customer_components/customer-layout/customer-layout.component';
import { CustomerMenuComponent } from './components/customer_components/customer-menu/customer-menu.component';
import { AdministratorCompaniesComponent } from './components/admin_components/administrator-companies/administrator-companies.component';
import { AdministratorCustomersComponent } from './components/admin_components/administrator-customers/administrator-customers.component';
import { AdministratorDisplayCompaniesComponent } from './components/admin_components/administrator-display-companies/administrator-display-companies.component';
import { AdministratorDisplayCustomersComponent } from './components/admin_components/administrator-display-customers/administrator-display-customers.component';
import { AdministratorCompanyDetailsComponent } from './components/admin_components/administrator-company-details/administrator-company-details.component';
import { AdministratorCustomerDetailsComponent } from './components/admin_components/administrator-customer-details/administrator-customer-details.component';
import { CompanyCouponDetailsComponent } from './components/company_components/company-coupon-details/company-coupon-details.component';
import { CompanyCouponsComponent } from './components/company_components/company-coupons/company-coupons.component';
import { CompanyDisplayCouponsComponent } from './components/company_components/company-display-coupons/company-display-coupons.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    Page404Component,
    ThumbnailComponent,
    LoginComponent,
    RootComponent,
    AdministratorHomeComponent,
    CompanyHomeComponent,
    AdministratorLayoutComponent,
    AdministratorMenuComponent,
    CompanyLayoutComponent,
    CompanyMenuComponent,
    CustomerHomeComponent,
    CustomerLayoutComponent,
    CustomerMenuComponent,
    AdministratorCompaniesComponent,
    AdministratorCustomersComponent,
    AdministratorDisplayCompaniesComponent,
    AdministratorDisplayCustomersComponent,
    AdministratorCompanyDetailsComponent,
    AdministratorCustomerDetailsComponent,
    CompanyCouponDetailsComponent,
    CompanyCouponsComponent,
    CompanyDisplayCouponsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
