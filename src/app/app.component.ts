
import { Component, OnInit } from '@angular/core';
import {NavigationStart, Router} from '@angular/router';


import { AgiauthService } from './agiauth.service';
import {tr} from 'ngx-bootstrap';
import {Agioptions} from './agioptions';
import {AgioptionsserviceService} from './agioptionsservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    private saveDNSoptions: Agioptions[] = [];
    private DNSvalues: Agioptions[];
    private DNScontent = ' --- ';

    title = 'DNS PANEL';

    islogged: boolean;

    constructor ( private router: Router,
                  private agiauth: AgiauthService,
                  private agiopt: AgioptionsserviceService

    ) {

        this.islogged = false;


    }

    wyloguj(): void {

        this.agiauth.wyloguj();

    }

    ngOnInit() {

        this.saveDNSoptions[0] = { name: 'dnsRestartF10', value: 'pending' };
        this.saveDNSoptions[1] = { name: 'dnsRestartF11', value: 'pending' };
        this.saveDNSoptions[2] = { name: 'dnsRestartAMS', value: 'pending' };

        this.agiauth.checkLogged.subscribe((val) => {
            this.islogged = val;
        });


        setInterval(() => {

                if (this.agiauth.logged === true) {

                    this.agiauth.sprawdzLogowanie();
                }

            }, 65000);



        this.router.events
            .subscribe((event) => {
                // example: NavigationStart, RoutesRecognized, NavigationEnd
                if (this.agiauth.logged === false) {
                    if (event instanceof NavigationStart) {

                        if (event.url !== '/logowanie') {

                            this.agiauth.lastUrl = event.url;
                            this.router.navigateByUrl('/logowanie');

                        }
                    }
                } else {

                    this.loadDNS();

                }

            });
    }


    restartDNS(): void {

        this.agiopt.saveOptions(this.saveDNSoptions).then( value => {

            this.loadDNS();

        });

    }

    loadDNS(): void {

        this.agiopt.loadOptions().then( value => {

            this.DNSvalues = value;
            this.DNScontent = '';
            for (let i = 0; i < value.length; i++) {
                this.DNScontent += value[i].name + ': ' + value[i].value + '<br>';
            }

        });

    }




}























