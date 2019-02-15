import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {ValueModel} from '../model/value.model';
import {map} from 'rxjs/operators';

@Injectable()
export class AbstractService {

    constructor(protected _http: HttpClient, protected route: string) {
        this.route = `${environment.URL_SERVER_API}` + '/' + route + '/';
    }

    all(): Observable<ValueModel[]> {
        return this._http.get(this.route).pipe(map(resp => resp as ValueModel[]));
    }
}
