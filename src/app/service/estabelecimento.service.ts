import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractService} from './abstract.service';

const urlServico = 'estabelecimento';

@Injectable()
export class EstabelecimentoService extends AbstractService {

    constructor(http: HttpClient) {
        super(http, urlServico);
    }
}
