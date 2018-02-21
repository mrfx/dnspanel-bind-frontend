import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DomenyComponent } from './domeny/domeny.component';
import { DomenaEditComponent } from './domena-edit/domena-edit.component';
import { LogowanieComponent } from './logowanie/logowanie.component';
import {NowaDomenaComponent} from './nowa-domena/nowa-domena.component';


const routes: Routes = [
    { path: 'domeny', component: DomenyComponent },
    { path: 'nowa-domena', component: NowaDomenaComponent },
    { path: 'logowanie', component: LogowanieComponent },
    { path: 'detail/:id', component: DomenaEditComponent }
];



@NgModule({

    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})



export class AppRoutingModule {}

