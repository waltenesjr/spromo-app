import {Component, Injector} from '@angular/core';
import {EstabelecimentoService} from '../service/estabelecimento.service';
import {ValueModel} from '../model/value.model';
import {PontoService} from '../service/ponto.service';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';

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

    constructor(private injector: Injector, private camera: Camera) {
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

    getPhoto() {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            let base64Image = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            // Handle error
        });
    }
}
