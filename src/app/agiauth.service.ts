import { Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import {HttpClient, HttpParams, HttpHeaders, HttpRequest } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import { Subject } from 'rxjs/Subject';
import {Domena} from './domena';
import {Agiconfig} from './agiconfig';
import {Router} from '@angular/router';


interface AuthResponse {
    wynik: string;
    auth: string[];
    comment: string;
}

@Injectable()
export class AgiauthService {



  public logged: boolean;
  public lastUrl: string;
  public auth: string[];
  public checkLogged = new BehaviorSubject<boolean>(false);
  private postUrl: string;


  constructor(private http: HttpClient, private router: Router) {

    this.logged = false;
    this.postUrl = Agiconfig.postUrl;
    this.lastUrl = '';
    this.auth = [];
    this.wyloguj();

  }


  sprawdzLogowanie(): void {

      const postData = {

          sh: 'sprawdzlogowanie'

      };

      this.http.post<AuthResponse>(this.postUrl, postData).toPromise().then( rr => {

              if (rr.wynik === 'false') {
                  this.logged = false;
                  this.checkLogged.next(false);
                  this.auth = rr.auth;
                  this.router.navigateByUrl('/logowanie');

              }
              return rr.wynik;

          }
      );

  }


  async zaloguj(username: string, password: string): Promise<string> {


      const postData = {

          sh: 'zaloguj',
          username: username,
          password: password

      };

      const response = await this.http.post<AuthResponse>(this.postUrl, postData).toPromise().then( rr => {

        // console.info('res', rr);

        if (rr.wynik === 'ok') {
          this.logged = true;
          this.checkLogged.next(true);
          this.auth = rr.auth;
          if (this.lastUrl !== '') {
              this.router.navigateByUrl(this.lastUrl);
          } else {
              this.router.navigateByUrl(Agiconfig.defaultUrl);
          }
        } else {
          this.logged = false;
          this.auth = [];
          this.checkLogged.next(false);
        }
        return rr.wynik;

        }
      );
      // console.info('promise', response);
      return response;

  }


  wyloguj(): void {

      const postData = {

          sh: 'wyloguj'

      };

      this.http.post<AuthResponse>(this.postUrl, postData).toPromise().then( rr => {

              // console.info('res', rr);

              if (rr.wynik === 'ok') {
                  this.logged = false;
                  this.checkLogged.next(false);
                  this.auth = [];
                  this.router.navigateByUrl('/logowanie');

              } else {
                  // console.info('logout error',rr);
              }
              return rr.wynik;

          }
      );

  }





}
