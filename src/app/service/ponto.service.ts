import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractService} from './abstract.service';

const urlServico = 'ponto';

@Injectable()
export class PontoService extends AbstractService {

    constructor(http: HttpClient) {
        super(http, urlServico);
    }
}
