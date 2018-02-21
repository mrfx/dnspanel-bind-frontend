import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AlertModule, ModalModule, PopoverModule } from 'ngx-bootstrap';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { DomenyComponent } from './domeny/domeny.component';
import { AppRoutingModule } from './/app-routing.module';
import { DomenaEditComponent } from './domena-edit/domena-edit.component';
import { DomenyService } from './domeny.service';
import { LogowanieComponent } from './logowanie/logowanie.component';
import { AgiauthService} from './agiauth.service';
import { NowaDomenaComponent } from './nowa-domena/nowa-domena.component';
import { DomenyModalsService } from './domeny-modals.service';
import { AgioptionsserviceService } from './agioptionsservice.service';


@NgModule({
  declarations: [
    AppComponent,
    DomenyComponent,
    DomenaEditComponent,
    LogowanieComponent,
    NowaDomenaComponent
  ],
  imports: [
      AlertModule.forRoot(),
      ModalModule.forRoot(),
      PopoverModule.forRoot(),
      BrowserModule,
      FormsModule,
      HttpClientModule,
      AppRoutingModule
  ],
  providers: [
      DomenyService,
      AgiauthService,
      DomenyModalsService,
      AgioptionsserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
