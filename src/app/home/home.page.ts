import {Component, Injector} from '@angular/core';
import {EstabelecimentoService} from '../service/estabelecimento.service';
import {ValueModel} from '../model/value.model';
import {PontoService} from '../service/ponto.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    estabelecimentos: ValueModel[] = new Array();
    estabelecimento: string;
    pontos: ValueModel[] = new Array();
    ponto: string;

    private estabelecimentoService: EstabelecimentoService;
    private pontoService: PontoService;

    constructor(private injector: Injector) {
        this.estabelecimentoService = this.injector.get(EstabelecimentoService);
        this.pontoService = this.injector.get(PontoService);
        this.allFornecedores();
        this.allPontos();
    }

    allFornecedores(): void {
        this.estabelecimentoService.all().subscribe((res: ValueModel[]) => {
            this.estabelecimentos = res;
        });
    }

    allPontos(): void {
        this.pontoService.all().subscribe((res: ValueModel[]) => {
            this.pontos = res;
        });
    }
}
