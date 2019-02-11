import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AbstractService} from './abstract.service';
import {Observable} from 'rxjs';

const urlServico = 'login';

@Injectable()
export class LoginService extends AbstractService {

    constructor(http: HttpClient) {
        super(http, urlServico);
    }

    login(login: string, senha: string): Observable<any> {
        const params = new HttpParams().set('login', login).append('senha', senha);
        return this._http.get(this.route, {params: params});
    }
}
