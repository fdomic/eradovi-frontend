import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";
import { LoginResponseInterface } from "./interface/loginResponse.interface";
import { KreirajFakultetInterface, FakultetInterface } from "./interface/kreirajFakultet.interface";
import { KreirajOdjelInterface } from "./interface/kreirajOdjel.interface";
import { kreirajStudentaInterface } from "./interface/kreirajStudenta.interface";
import { KreirajDjelatnikaInterface } from "./interface/kreirajDjelatnika.interface";
import { kreirajRadInterface } from './interface/kreirajRad.interface';
import { kreirajPonudenuTemuInterface } from './interface/kreirajPonudenuTemu.interface';
import { kreirajOdjelDjelatnikaInterface } from './interface/kreirajOdjelDjelatnika.interface';

@Injectable()
export class ApiService {
  private url: string = environment.apiServer;

  constructor(private http: HttpClient) {}

  //-------AUTETIFIKACIJA---------------------------------------------------------------------

  public login(
    email: string,
    password: string
  ): Observable<LoginResponseInterface> {
    let payload = {
      email: email,
      password: password
    };

    return <any>(
      this.http.post(this.url + "/login", payload, this.getHttpOptions())
    );
  }
  //-------FAKULTET---------------------------------------------------------------------

  public dohvatiFakultete(): Observable<any> {
    // TODO interface
    return <any>this.http.get(this.url + "/fakultet"  , this.getHttpOptions());
  }

  public kreirajFakultet(naziv: string, id?: number): Observable<KreirajFakultetInterface> {
    let payload = {
      naziv: naziv
    };
    if(id) payload["id"] = id;
    return <any>(
      this.http.post(this.url + "/fakultet", payload, this.getHttpOptions())
    );
  }


  //----------ODJEL----------------------------------------------------------------

  public dohvatiOdjel(): Observable<any> {
    // TODO interface
    return <any>this.http.get(this.url + "/odjel", this.getHttpOptions());
  }

  public kreirajOdjel(
    fakultet_id: string,
    naziv: string
  ): Observable<KreirajOdjelInterface> {
    let payload = {
      fakultet_id: fakultet_id,
      naziv: naziv
    };
    return <any>(
      this.http.post(this.url + "/odjel", payload, this.getHttpOptions())
    );
  }

  //-------DJELATNIK---------------------------------------------------------------------

  public dohvatijDjelatnika(): Observable<any> {
    // TODO interface
    return <any>this.http.get(this.url + "/dijelatnik", this.getHttpOptions());
  }

  public kreirajDjelatnika(
    name: string,
    email: string,
    password: string,
    ime: string,
    prezime: string,
    oib: string,
    jmbag: string
  ): Observable<KreirajDjelatnikaInterface> {
    let payload = {
      users: {
        name: name,
        email: email,
        password: password
      },
      ime: ime,
      prezime: prezime,
      oib: oib,
      jmbag: jmbag
    };
    return <any>(
      this.http.post(this.url + "/dijelatnik", payload, this.getHttpOptions())
    );
  }
  //-------STUDENT---------------------------------------------------------------------

  public dohvatiStudenta(): Observable<any> {
    // TODO interface
    return <any>this.http.get(this.url + "/student", this.getHttpOptions());
  }

  public kreirajStudenta(
    name: string,
    email: string,
    password: string,
    ime: string,
    prezime: string,
    oib: string,
    jmbag: string
  ): Observable<kreirajStudentaInterface> {
    let payload = {
      users: {
        name: name,
        email: email,
        password: password
      },
      ime: ime,
      prezime: prezime,
      oib: oib,
      jmbag: jmbag
    };
    return <any>(
      this.http.post(this.url + "/student", payload, this.getHttpOptions())
    );
  }

  //---------ODJEL DJELATNIKA----------------------------------------------------------------

  public kreirajOdjelDjelatnika(
    odjel_id: string,
    djelatnik_id: string,
    naziv: string
  ): Observable<kreirajOdjelDjelatnikaInterface> {
    let payload = {
      odjel_id: odjel_id,
      djelatnik_id: djelatnik_id,
      naziv: naziv
    };
    return <any>(
      this.http.post(
        this.url + "/odijel-djelatnik",
        payload,
        this.getHttpOptions()
      )
    );
  }
  //----------RAD-------------------------------------------------------------------

  
  public dohvatirad(): Observable<any> {
    // TODO interface
    return <any>this.http.get(this.url + "/rad", this.getHttpOptions());
  }

  public kreirajrad(
    statusi_rada_id: string,
  
    djelatnik_id: string,
    naziv_hr: string,
    opis_hr: string,
    naziv_eng: string,
    opis_eng: string,
    naziv_tal: string,
    opis_tal: string
  ): Observable<kreirajRadInterface> {
    let payload = {
      stanje_rada: {
        statusi_rada_id: statusi_rada_id
      },

      djelatnik_id: djelatnik_id,

      naziv_hr: naziv_hr,
      opis_hr: opis_hr,

      naziv_eng: naziv_eng,
      opis_eng: opis_eng,

      naziv_tal: naziv_tal,
      opis_tal: opis_tal
    };
    return <any>(
      this.http.post(this.url + "/rad", payload, this.getHttpOptions())
    );
  }
  //----------Ponudena tema-------------------------------------------------------------------

  public dohvatiPonudenuTemu(): Observable<any> {
    // TODO interface
    return <any>this.http.get(this.url + "/ponudena-tema", this.getHttpOptions());
  }

  public kreirajPonudenuTemu(
    rad_id: Number,
    djelatnik_id: Number,
    naziv_hr: string,
    opis_hr: string,
    naziv_eng: string,
    opis_eng: string,
    naziv_tal: string,
    opis_tal: string
  ): Observable<kreirajPonudenuTemuInterface> {
    let payload = {
     
      rad_id: rad_id,
      djelatnik_id: djelatnik_id,

      naziv_hr: naziv_hr,
      opis_hr: opis_hr,

      naziv_eng: naziv_eng,
      opis_eng: opis_eng,

      naziv_tal: naziv_tal,
      opis_tal: opis_tal
    };
    return <any>(
      this.http.post(this.url + "/ponudena-tema", payload, this.getHttpOptions())
    );
  }
  //----------DATOTEKA-------------------------------------------------------------------

  public kreirajDatoteku(rad_id: number, payload: FormData): Observable<any> {

    return <any>(
      this.http.post(
        this.url + "/ucitaj/" + rad_id,
        payload,
        this.getHttpOptions('form')
      )
    );
  }

  //-----------------------------------------------------------------------------------------

  private getHttpOptions(contentType?: 'json' | 'form'): any {
    if(!contentType) contentType = 'json';
    let headers = {};
    if(contentType === "json") {
      headers["Content-Type"] = "application/json";
    }

    const token = localStorage.getItem("AUTH_TOKEN");
    if (token) {
      headers["Authorization"] = "Bearer " + token;
    }

    const httpOptions = {
      headers: new HttpHeaders(headers)
    };

    return httpOptions;
  }
}
