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

    photos: string[] = new Array();

    private estabelecimentoService: EstabelecimentoService;
    private pontoService: PontoService;

    constructor(private injector: Injector,
                private camera: Camera) {
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
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 200,
            targetHeight: 200
        };

        this.camera.getPicture(options).then((imageData) => {
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            this.photos.push(base64Image);
        }, (error) => {
            console.error(error);
        }).catch((error) => {
            console.error(error);
        });
    }
}
