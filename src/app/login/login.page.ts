import {Component, Injector} from '@angular/core';
import {LoginService} from '../service/login.service';

@Component({
    selector: 'app-login',
    templateUrl: 'login.page.html',
    styleUrls: ['login.page.scss'],
})
export class LoginPage {

    private service: LoginService;

    constructor(private injector: Injector) {
        this.service = this.injector.get(LoginService);
    }
}
