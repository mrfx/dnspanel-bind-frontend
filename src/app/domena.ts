
import { Subdomena } from './subdomena';

export class Domena {

    id: number;
    domena: string;
    klientID: number;
    dataUtworzenia: string;
    dataWygasniecia: string;
    aktywna: number;
    type: string;
    masters: string;
    rekordA: string;
    rekordMX: string[];
    rekordNS: string[];
    rekordCNAME: string;
    onCNAME: boolean;
    soaPrimary: string;
    soaEmail: string;
    soaSerial: string;
    soaRefresh: string;
    soaRetry: string;
    soaExpire: string;
    soaTTL: string;
    checkResult: number;
    subdomeny: Subdomena[];

}

