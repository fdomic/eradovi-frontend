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
import { kreirajKomentarInterface } from './interface/kreirajKomentar.interface';

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

  public refresh(): Observable<LoginResponseInterface> {
    return <any>(
      this.http.get(this.url + "/refresh", this.getHttpOptions())
    );
  }

  //-------Korisnici---------------------------------------------------------------------

  public dohvatiKorisnika(id?: number): Observable<any> {
    // TODO interface

    if(id)return <any>this.http.get(this.url + "/user/" + id  , this.getHttpOptions());

    return <any>this.http.get(this.url + "/user"  , this.getHttpOptions());
  }


  //-------FAKULTET---------------------------------------------------------------------

  public dohvatiFakultete(id?: number): Observable<any> {
    // TODO interface

    if(id)return <any>this.http.get(this.url + "/fakultet/" + id  , this.getHttpOptions());

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

  public dohvatiOdjel(id?: number): Observable<any> {
    // TODO interface
    if(id) return <any>this.http.get(this.url + "/odjel/" + id, this.getHttpOptions());
    return <any>this.http.get(this.url + "/odjel", this.getHttpOptions());
  }

  public kreirajOdjel(
    fakultet_id: string,
    naziv: string,
    id?: number
  ): Observable<KreirajOdjelInterface> {
    
    let payload = {
      fakultet_id: fakultet_id,
      naziv: naziv
    };
    if(id) payload["id"] = id;
    return <any>(
      this.http.post(this.url + "/odjel", payload, this.getHttpOptions())
    );
  }

  //-------DJELATNIK---------------------------------------------------------------------

  public dohvatijDjelatnika(id?:number): Observable<any> {
    // TODO interface
    if(id) return <any>this.http.get(this.url + "/dijelatnik/"+ id, this.getHttpOptions());
    return <any>this.http.get(this.url + "/dijelatnik", this.getHttpOptions());
  }

  public kreirajDjelatnika(
    name: string,
    email: string,
    password: string,
    ime: string,
    prezime: string,
    oib: string,
    jmbag: string,
    id?:number
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
    if(id) payload["id"] = id;
    return <any>(
      this.http.post(this.url + "/dijelatnik", payload, this.getHttpOptions())
    );
  }
  //-------STUDENT---------------------------------------------------------------------

  public dohvatiStudenta(id?:number): Observable<any> {
    // TODO interface
    if(id) return <any>this.http.get(this.url + "/student/"+ id, this.getHttpOptions());
    return <any>this.http.get(this.url + "/student", this.getHttpOptions());
  }

  public kreirajStudenta(
    name: string,
    email: string,
    password: string,
    ime: string,
    prezime: string,
    oib: string,
    jmbag: string,
    id?:number
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
    if(id) payload["id"] = id;
    return <any>(
      this.http.post(this.url + "/student", payload, this.getHttpOptions())
    );
  }

  //---------ODJEL DJELATNIKA----------------------------------------------------------------

  
  public dohvatiOdjelDjelatnika(id?:number): Observable<any> {
    // TODO interface
    if(id) return <any>this.http.get(this.url + "/odijel-djelatnik/"+ id, this.getHttpOptions());
    return <any>this.http.get(this.url + "/odijel-djelatnik", this.getHttpOptions());
  }


  public kreirajOdjelDjelatnika(
    odjel_id: string,
    djelatnik_id: string,
    naziv: string,
    id?:number
  ): Observable<kreirajOdjelDjelatnikaInterface> {
    let payload = {
      odjel_id: odjel_id,
      djelatnik_id: djelatnik_id,
      naziv: naziv
    };
    if(id) payload["id"] = id;
    return <any>(
      this.http.post(
        this.url + "/odijel-djelatnik",
        payload,
        this.getHttpOptions()
      )
    );
  }
  //----------RAD-------------------------------------------------------------------

  
  public dohvatirad(id?:number): Observable<any> {
    // TODO interface
    if(id) return <any>this.http.get(this.url + "/rad/"+ id, this.getHttpOptions());
    return <any>this.http.get(this.url + "/rad", this.getHttpOptions());
  }

  public kreirajrad(
    statusi_rada_id: string,
    
    naziv_hr: string,
    opis_hr: string,
    naziv_eng: string,
    opis_eng: string,
    naziv_tal: string,
    opis_tal: string,
  
    student_id?:number,
    id?:number,
    djelatnik_id?: number,
  ): Observable<kreirajRadInterface> {
    let payload = {
      stanje_rada: {
        statusi_rada_id: statusi_rada_id
      }, };

     
    if(id) payload["id"] = id;
    if(student_id > 0)payload["student_id"] = student_id;
    if(djelatnik_id > 0)payload["djelatnik_id"] = djelatnik_id;
  
      
     payload["naziv_hr"] = naziv_hr;
     payload["opis_hr"] = opis_hr;
     
     payload["naziv_eng"] = naziv_eng;
     payload["opis_eng"] = opis_eng;
     
     payload["naziv_tal"] = naziv_tal;
     payload["opis_tal"] = opis_tal;
     



    return <any>(
      this.http.post(this.url + "/rad", payload, this.getHttpOptions())
    );
  }
  //----------Ponudena tema-------------------------------------------------------------------

  public dohvatiPonudenuTemu(id?:number): Observable<any> {
    // TODO interface
    if(id) return <any>this.http.get(this.url + "/ponudena-tema/"+ id, this.getHttpOptions());
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
    opis_tal: string,
    id?:number
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
    if(id) payload["id"] = id;
    return <any>(
      this.http.post(this.url + "/ponudena-tema", payload, this.getHttpOptions())
    );
  }
  //----------DATOTEKA-------------------------------------------------------------------

   public dohvatiDatoteku(id?:number): Observable<any> {
    
    if(id) return <any>this.http.get(this.url + "/verzije-radova/"+ id, this.getHttpOptions());
    return <any>this.http.get(this.url + "/verzije-radova", this.getHttpOptions());
  }

    public kreirajDatoteku(rad_id: number, payload: FormData): Observable<any> {

    return <any>(
      this.http.post(
        this.url + "/ucitaj/" + rad_id,
        payload,
        this.getHttpOptions('form')
      )
    );
  }


  //----------Rezervacija teme-------------------------------------------------------------------

  public rezervirajTemu(id: number): Observable<any> {

    return <any>(
      this.http.get(this.url + "/rezervacija/"+id , this.getHttpOptions())
    );
    
  }
  //-------Komentar---------------------------------------------------------------------


  public dohvatiKomentar(id?:number): Observable<any> {
    
    
    return <any>this.http.get(this.url + "/komentar", this.getHttpOptions());
  }

  public kreirajKomentar(komentar: string, datum: string , id_rada: number, id?: number): Observable<kreirajKomentarInterface> {
    let payload = {
      
      komentar: komentar,
      datum: datum
    };
    if(id) payload["id"] = id;
    return <any>(
      this.http.post(this.url + "/komentar/"+id_rada , payload, this.getHttpOptions())
    );
  }
  //----------Ponudena tema-------------------------------------------------------------------

  public dohvatiStanjeRada(id?:number): Observable<any> {
    // TODO interface
    return <any>this.http.get(this.url + "/stanje-rada", this.getHttpOptions());
  }

  //----------Statusi rada-------------------------------------------------------------------

  public dohvatiStatusRada(id?:number): Observable<any> {
    // TODO interface
    return <any>this.http.get(this.url + "/statusi-rada", this.getHttpOptions());
  }

  //----------Statusi rada-------------------------------------------------------------------

  public statusi_verzija(id?:number): Observable<any> {
    // TODO interface
    return <any>this.http.get(this.url + "/status-verzije", this.getHttpOptions());
  }

  
  //----------Odlucivanje-------------------------------------------------------------------

  public SpremiOdluku(rad_id?:number , statusi_rada_id?: number, id?: number): Observable<any> {
    let payload = {
      statusi_rada_id:statusi_rada_id
    };
    if(id) payload["id"] = id;
    return <any>(
      this.http.post(this.url + "/odlucivanje/"+rad_id , payload, this.getHttpOptions())
    );
  }
  //----------Odlucivanje-------------------------------------------------------------------

  public Kronologija(rad_id?:number): Observable<any> {
    
    return <any>this.http.get(this.url + "/kronologija/" + rad_id, this.getHttpOptions());
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
