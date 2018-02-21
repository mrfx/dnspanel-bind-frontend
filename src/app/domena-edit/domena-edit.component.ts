import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


import { DomenyService } from '../domeny.service';

import { Domena } from '../domena';
import { Subdomena } from '../subdomena';

@Component({
  selector: 'app-domena-edit',
  templateUrl: './domena-edit.component.html',
  styleUrls: ['./domena-edit.component.css']
})
export class DomenaEditComponent implements OnInit {

  @Input() domena: Domena;

  modalRef: BsModalRef;


  domenyLicznik: number;
  id: number;
  wczytane: number;
  checkResult: string;
  checkResultDone: boolean;
  modalMessage: string;
  modalConfirmed: boolean;
  modalType: string;
  modalID: number;

  testx: string;


  constructor(private domenyService: DomenyService,
              private route: ActivatedRoute,
              private modalService: BsModalService) {

      this.checkResultDone = false;
      this.domenyLicznik = this.domenyService.licznik;
      this.domenyService.domenaIDLoaded.subscribe(value => {

          if (value === 1) {
              this.getDomena();
              this.domenyService.setIDLoaded(3);
              this.wczytane = 1;
          }


      });



  }


  trackByDomena(index: number, domena: Domena): number { return domena.id; }

  trackBySubdomena(index: number, subdomena: Subdomena): number { return subdomena.id; }

  ngOnInit() {

      this.checkResultDone = false;
      this.wczytane = 0;
      this.id = +this.route.snapshot.paramMap.get('id');
      // console.info('id',this.id);
      this.domenyService.domenaIDP = this.id;
      this.domenyService.loadDomenaID();
      this.domenyService.licznik++;
      this.domenyLicznik = this.domenyService.licznik;
      this.modalMessage = '';
      this.modalConfirmed = false;

      this.getDomena();


  }




    getDomena(): void {

        this.domenyService.getDomenaID().subscribe( domeny => {


            this.domena = domeny;



        });


    }

    saveDomena(): void {

      this.domenyService.saveDomenaID(this.domena);

    }


    checkDomena(): void {

        this.domenyService.checkDomenaID().then(
            wynik => {
                this.checkResult = wynik;
                this.checkResultDone  = true;
                // console.info ('sss', this.checkResult);

            }
        );

    }

    checkDomenaErrors(): void {

        this.domenyService.checkDomenaIDerrors().then(
            wynik => {
                this.checkResult = wynik;
                this.checkResultDone  = true;
                // console.info ('sss', this.checkResult);

            }
        );

    }


    checkDelegacja(): void {

        this.domenyService.checkDelegacjaID().then(
            wynik => {
                this.checkResult = wynik;
                this.checkResultDone  = true;
                // console.info ('sss', this.checkResult);

            }
        );

    }



    closeCheckDomena(): void {

      this.checkResultDone = false;

    }




    deleteSubdomena(id: number): void {

        this.domenyService.deleteSubdomena(id).then(wynik => {

            this.domenyService.loadDomenaID();
            this.getDomena();

        });

    }

    addSubdomena(): void {

        this.domenyService.createSubomena(this.id).then(wynik => {

            this.domenyService.loadDomenaID();
            this.getDomena();

        });


    }





    openModal(template: TemplateRef<any>, typ: string, i: number): void {

        this.modalType = typ;

        if (typ === 'subdomain-delete') {
            this.modalMessage = 'Czy na pewno chcesz skasować subdomenę ' + this.domena.subdomeny[i].nazwa;
            this.modalID = this.domena.subdomeny[i].id;
        }

        this.modalRef = this.modalService.show(template);
    }

    modalConfirm(): void {

        this.modalConfirmed = true;
        this.modalRef.hide();

        if ( this.modalType === 'subdomain-delete' ) {

            this.deleteSubdomena(this.modalID);

        }

        this.modalID = 0;
        this.modalType = '';

    }

    modalDecline(): void {

        this.modalID = 0;
        this.modalType = '';

        this.modalConfirmed = false;
        this.modalRef.hide();
    }








}



