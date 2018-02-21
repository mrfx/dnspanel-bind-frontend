import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient, HttpParams, HttpHeaders, HttpRequest } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import { Subject } from 'rxjs/Subject';


import { Domena } from './domena';
import { Domenamini } from './domenamini';
import { Agiconfig} from './agiconfig';
import { AnswerSimple} from './answer-simple';


@Injectable()
export class DomenyService {

    private domenyPostUrl = '/srv/post.php';
    private domeny$: Domena[] = [];
    private domenyMini: Domenamini[] = [];
    private domenaID: Domena = new Domena();
    public domenaIDP: any;
    public testD: string;
    public domenyLoaded = new Subject<number>();
    public domenyMiniLoaded = new Subject<number>();
    public domenaIDLoaded = new Subject<number>();
    public licznik: number;


    constructor( private http: HttpClient ) {

        this.testD = 'yyy';
        this.loadDomenyMini();
        this.licznik = 0;
        this.domenaIDP = 0;
        this.domenyPostUrl = Agiconfig.postUrl;

    }

    setLoaded(val): void {
        // console.info('val', val);
        this.domenyLoaded.next(val);

    }

    setMiniLoaded(val): void {
        // console.info('val', val);
        this.domenyMiniLoaded.next(val);

    }

    setIDLoaded(val): void {
        // console.info('val', val);
        this.domenaIDLoaded.next(val);

    }


    private loadDomenyMini(): void {

        this.http.get<Domena[]>(this.domenyPostUrl, {params: new HttpParams().set('sh', 'getDomainsMini')})
            .subscribe( domeny => { this.domenyMini = domeny; this.setMiniLoaded(1); });


    }


    private loadDomeny(): void {

        this.http.get<Domena[]>(this.domenyPostUrl, {params: new HttpParams().set('sh', 'getDomains')})
            .subscribe( domeny => { this.domeny$ = domeny; this.setLoaded(1); });

    }


    public loadDomenaID(): void {

        this.http.get<Domena>(this.domenyPostUrl, {params: new HttpParams().set('sh', 'getDomainID').append('id', <string>this.domenaIDP )})
            .subscribe( domeny => { this.domenaID = domeny; this.domenaID.onCNAME = Boolean(this.domenaID.onCNAME); this.setIDLoaded(1); });

    }



    getDomeny(): Observable<Domena[]> {

        return Observable.of(this.domeny$);

    }



    getDomenyMini(): Observable<Domenamini[]> {

        return Observable.of(this.domenyMini);

    }

    getDomenaID(): Observable<Domena> {

        return Observable.of(this.domenaID);

    }


    changeTest(val: string): void {

        this.testD = val;

    }



    public saveDomenaID(domenaZ: Domena): void {



        const postData = {

            sh: 'saveDomainID',
            domena: domenaZ

        };

        // console.info('saving data: ', postData.domena);

        this.http.post(this.domenyPostUrl, postData).subscribe(val => {

            // console.info('post return', val);

        });

    }



    async checkDomenaID(): Promise<string> {

        const answer = await this.http.get<AnswerSimple>(this.domenyPostUrl,
            {params: new HttpParams()
                    .set('sh', 'checkDomainConfiguration')
                    .append('id', <string>this.domenaIDP )})
            .toPromise().then( wynik => {

                return wynik;

            });

        return answer.resultx;


    }


    async checkDomenaIDerrors(): Promise<string> {

        const answer = await this.http.get<AnswerSimple>(this.domenyPostUrl,
            {params: new HttpParams()
                    .set('sh', 'checkDomainConfigurationErrors')
                    .append('id', <string>this.domenaIDP )})
            .toPromise().then( wynik => {
                // console.info('checkRes', wynik);
                return wynik;

            });

        return answer.resultx;


    }


    async checkDelegacjaID(): Promise<string> {

        const answer = await this.http.get<AnswerSimple>(this.domenyPostUrl,
            {params: new HttpParams()
                    .set('sh', 'checkDomainDelegation')
                    .append('id', <string>this.domenaIDP )})
            .toPromise().then( wynik => {
                // console.info('checkRes', domeny);
                return wynik;

            });

        return answer.resultx;


    }




    async createDomena(domena: string): Promise<string> {

        const answer = await this.http.get<AnswerSimple>(this.domenyPostUrl,
            {params: new HttpParams()
                    .set('sh', 'createDomain')
                    .append('domena', <string>domena )})
            .toPromise().then( wynik => {
                // console.info('checkRes', domeny);
                return wynik;

            });

        return answer.resultx;


    }






    async deleteSubdomena(id: number): Promise<string> {

        const answer = await this.http.get<AnswerSimple>(this.domenyPostUrl,
            {params: new HttpParams()
                    .set('sh', 'deleteSubdomain')
                    .append('domenaID', <any>id )})
            .toPromise().then( wynik => {

                return wynik;

            });

        return answer.resultx;


    }




    async createSubomena(domena: number): Promise<string> {

        const answer = await this.http.get<AnswerSimple>(this.domenyPostUrl,
            {params: new HttpParams()
                    .set('sh', 'createSubdomain')
                    .append('domenaID', <any>domena )})
            .toPromise().then( wynik => {
                // console.info('checkRes', domeny);
                return wynik;

            });

        return answer.resultx;


    }







}
