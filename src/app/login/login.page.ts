import {Component, Injector} from '@angular/core';
import {LoginService} from '../service/login.service';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-login',
    templateUrl: 'login.page.html',
    styleUrls: ['login.page.scss'],
})
export class LoginPage {

    private service: LoginService;
    errorLogin: boolean;
    errorLoginEmpty: boolean;
    login: string;
    senha: string;

    constructor(private injector: Injector, public navCtrl: NavController) {
        this.service = this.injector.get(LoginService);
        this.errorLogin = false;
    }

    async logar() {
        this.clearMessage();
        if (this.login === undefined || this.senha === undefined) {
            this.errorLoginEmpty = true;
        } else {
            this.service.login(this.login, this.senha).subscribe(async (res: any) => {
                if (res) {
                    this.navCtrl.navigateRoot('/home');
                } else {
                    this.errorLogin = true;
                }
            });
        }
    }

    clearMessage() {
        this.errorLogin = false;
        this.errorLoginEmpty = false;
    }
}
