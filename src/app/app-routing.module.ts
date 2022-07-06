import { AdministratorDisplayCustomersComponent } from './components/admin_components/administrator-display-customers/administrator-display-customers.component';
import { AdministratorDisplayCompaniesComponent } from './components/admin_components/administrator-display-companies/administrator-display-companies.component';
import { CustomerLayoutComponent } from './components/customer_components/customer-layout/customer-layout.component';
import { CustomerHomeComponent } from './components/customer_components/customer-home/customer-home.component';
import { CompanyHomeComponent } from './components/company_components/company-home/company-home.component';
import { CompanyLayoutComponent } from './components/company_components/company-layout/company-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './components/page404/page404.component';
import { LoginComponent } from './components/login/login.component';
import { AdministratorLayoutComponent } from './components/admin_components/administrator-layout/administrator-layout.component';
import { AdministratorHomeComponent } from './components/admin_components/administrator-home/administrator-home.component';
import { AdministratorCompaniesComponent } from './components/admin_components/administrator-companies/administrator-companies.component';
import { AdministratorCustomersComponent } from './components/admin_components/administrator-customers/administrator-customers.component';
import { AdministratorCompanyDetailsComponent } from './components/admin_components/administrator-company-details/administrator-company-details.component';
import { AdministratorCustomerDetailsComponent } from './components/admin_components/administrator-customer-details/administrator-customer-details.component';
import { CompanyCouponsComponent } from './components/company_components/company-coupons/company-coupons.component';
import { CompanyCouponDetailsComponent } from './components/company_components/company-coupon-details/company-coupon-details.component';
import { CompanyDisplayCouponsComponent } from './components/company_components/company-display-coupons/company-display-coupons.component';


const routes: Routes = [
    { path: "login", component: LoginComponent },
    {
        path: "api/ADMINISTRATOR", component: AdministratorLayoutComponent, children: [
            { path: "home", component: AdministratorHomeComponent },
            { path: "add-companies", component: AdministratorCompaniesComponent },
            { path: "add-customers", component: AdministratorCustomersComponent },
            { path: "display-companies", component: AdministratorDisplayCompaniesComponent },
            { path: "display-customers", component: AdministratorDisplayCustomersComponent },
            { path: "company-details/:id", component: AdministratorCompanyDetailsComponent },
            { path: "customer-details/:id", component: AdministratorCustomerDetailsComponent}
            // { path: "about", component: AboutComponent }

        ]
    },
    {
        path: "api/COMPANY", component: CompanyLayoutComponent, children: [
            { path: "home", component: CompanyHomeComponent },
            { path: "add-coupons", component: CompanyCouponsComponent},
            { path: "display-coupons", component: CompanyDisplayCouponsComponent},
            { path: "coupon-details/:id", component: CompanyCouponDetailsComponent}

        ]
    },
    {
        path: "api/CUSTOMER", component: CustomerLayoutComponent, children: [
            { path: "home", component: CustomerHomeComponent },

        ]
    },
    { path: "", redirectTo: "/login", pathMatch: "full" }, // default pathMatch is prefix
    { path: "**", component: Page404Component }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
