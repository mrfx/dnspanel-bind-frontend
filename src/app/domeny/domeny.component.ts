import { Component, OnInit, Pipe } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import { Domena} from '../domena';
import { DomenyService } from '../domeny.service';
import {Domenamini} from '../domenamini';



@Component({
  selector: 'app-domeny',
  templateUrl: './domeny.component.html',
  styleUrls: ['./domeny.component.css']
})




export class DomenyComponent implements OnInit {

  opis = ' lalalala ';
  domeny: Array<Domenamini> = [];

  domenyNieaktywne: Domenamini[] = [];
  domenyAktywne: Domenamini[] = [];

  domenyAktywnePokazane: Domenamini[] = [];
  domenyNieaktywnePokazane: Domenamini[] = [];

  szukajAktywne: string;
  szukajNieaktywne: string;

  wczytane: boolean;


  constructor(private http: HttpClient,
              private domenyService: DomenyService
  ) {

      this.wczytane = false;
      this.domenyService.domenyMiniLoaded.subscribe(value => {

          if (value === 1) {
            this.getDomeny();
            this.domenyService.setMiniLoaded(3);
          }


      });


  }


  ngOnInit() {

    this.wczytane = false;
    this.getDomeny();
    this.domenyService.setMiniLoaded(2);
    this.szukajAktywne = '';
    this.szukajNieaktywne = '';


  }


  getDomeny(): void {

      this.domenyService.getDomenyMini().subscribe( domeny => {

        this.domeny = domeny;
        this.domenyNieaktywne = this.domeny.filter(x => x.aktywna === 0);
        this.domenyAktywne = this.domeny.filter(x => x.aktywna === 1);
        this.domenyAktywnePokazane = this.domenyAktywne;
        this.domenyNieaktywnePokazane = this.domenyNieaktywne;
        this.wczytane = true;


      });


  }


  filtrujAktywne(): void {

      this.domenyAktywnePokazane = this.domenyAktywne.filter(
          (item: Domenamini) =>

              item.domena.indexOf(this.szukajAktywne) !== -1

          );

  }

    filtrujNieaktywne(): void {

        this.domenyNieaktywnePokazane = this.domenyNieaktywne.filter(
            (item: Domenamini) =>

                item.domena.indexOf(this.szukajNieaktywne) !== -1

        );

    }






}









