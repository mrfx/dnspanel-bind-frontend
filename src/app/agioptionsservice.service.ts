import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Agiconfig } from './agiconfig';
import { Agioptions } from './agioptions';
import {AnswerSimple} from './answer-simple';

@Injectable()
export class AgioptionsserviceService {

  private domenyPostUrl = '/srv/post.php';
  public options: Agioptions[];

  constructor( private http: HttpClient ) {

      this.domenyPostUrl = Agiconfig.postUrl;

  }

  async saveOptions(opt: Agioptions[]): Promise<string> {

      const postData = {

          sh: 'setOptions',
          options: opt

      };

      // console.info('saving data: ', postData.domena);

      const answer = await this.http.post<AnswerSimple>(this.domenyPostUrl, postData).toPromise().then(val => {
        
        return val.resultx;

      });

      return answer;

  }

    async loadOptions(): Promise<any> {

        const postData = {

            sh: 'getOptions'

        };

        // console.info('saving data: ', postData.domena);

        const answer = await this.http.post<any>(this.domenyPostUrl, postData).toPromise().then(val => {

            this.options = val.agioptions;
            return this.options;

        });

        return answer;

    }





}


