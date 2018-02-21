import { Component, OnInit } from '@angular/core';
import { DomenyService } from '../domeny.service';
import {tr} from 'ngx-bootstrap';
import {Router} from '@angular/router';



@Component({
  selector: 'app-nowa-domena',
  templateUrl: './nowa-domena.component.html',
  styleUrls: ['./nowa-domena.component.css']
})
export class NowaDomenaComponent implements OnInit {

  domena: string;
  istnieje: boolean;
  err: string;

  constructor( private domenyService: DomenyService,
               private router: Router ) { }

  ngOnInit() {

    this.istnieje = false;
    this.err = '';

  }


  createDomain(): void {

    this.domenyService.createDomena(this.domena).then(wynik => {

      console.info ('wynik: ', wynik);

        if (wynik === 'ok-created') {

            this.router.navigateByUrl('domeny');

        } else {

          this.istnieje = true;

        }

    });

  }



}
