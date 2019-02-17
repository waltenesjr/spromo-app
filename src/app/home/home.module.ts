import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {HomePage} from './home.page';
import {EstabelecimentoService} from '../service/estabelecimento.service';
import {PontoService} from '../service/ponto.service';

import {Camera} from "@ionic-native/camera/ngx";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            }
        ])
    ],
    declarations: [HomePage],
    providers: [EstabelecimentoService, PontoService, Camera]
})
export class HomePageModule {
}
