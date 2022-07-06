import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public clientTypeString = "";

    constructor(private loginService: LoginService, private router: Router) { }

    ngOnInit(): void {
    }

    SetClientType (clientTypeValue:any){
        this.clientTypeString = clientTypeValue.target.value;
    }

    public login(email: string, password: string) {
        let subsciption = this.loginService.login(email, password, this.clientTypeString).subscribe({
            next: (token) => {
                // save the token in browser's session storage
                sessionStorage.setItem('token', token.toString());
                // navigate to home page for client type
                if (this.clientTypeString == "ADMINISTRATOR") {
                    this.router.navigate(["api/ADMINISTRATOR/home"]);
                } 
                else if(this.clientTypeString == "COMPANY") {
                    this.router.navigate(["api/COMPANY/home"]);
                }
                else if(this.clientTypeString == "CUSTOMER") {
                    this.router.navigate(["api/CUSTOMER/home"]);
                }
            },
            error: (e) => {
                console.dir(e);
                // let errJson = e.error;
                // let errObj = JSON.parse(errJson);
                // console.dir(errObj);
                // let errMsg = errObj.message;
                alert(JSON.parse(e.error).message);
            },
            complete: () => {
                subsciption.unsubscribe();
            }
        });
    }
}
