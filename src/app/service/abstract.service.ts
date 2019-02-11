import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class AbstractService {

    constructor(protected _http: HttpClient, protected route: string) {
        this.route = `${environment.URL_SERVER_API}` + '/' + route + '/';
    }
}
