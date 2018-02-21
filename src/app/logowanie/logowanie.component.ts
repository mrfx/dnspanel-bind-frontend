import { Component, OnInit, Input } from '@angular/core';

import { AgiauthService } from '../agiauth.service';

@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.css']
})
export class LogowanieComponent implements OnInit {

  username: string;
  password: string;
  error: number;

  constructor( private agiauth: AgiauthService ) {

    this.error = 0;

  }

  ngOnInit() {
  }

  zaloguj(): void {
    console.log(1);
    this.error = 0;
    this.agiauth.zaloguj(this.username, this.password).then(
        rr => {

          // console.info('2 rr', rr);

          if (rr === 'error') {
            this.error = 1;
          }

        }
    );

  }


    keyDownFunction(event): void {
        if (event.keyCode === 13) {
            this.zaloguj();
        }
    }



}
