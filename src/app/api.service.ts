import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { LoginResponseInterface } from "./interface/loginResponse.interface";
import { KreirajFakultetInterface } from "./interface/kreirajFakultet.interface";
import { KreirajOdjelInterface } from './interface/kreirajOdjel.interface';
import { Data } from '@angular/router';

@Injectable()
export class ApiService {
  private url: string = environment.apiServer;

  constructor(private http: HttpClient) {}

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
  //-------Kreiraj fakultet---------------------------------------------------------------------

  public dohvatiFakultete(): Observable<any> { // TODO interface
    return <any>(
      this.http.get(this.url + "/fakultet", this.getHttpOptions())
    );
  }

  public kreirajFakultet(naziv: string): Observable<KreirajFakultetInterface> {
    let payload = {
     
      naziv: naziv
    };
    return <any>(
      this.http.post(this.url + "/fakultet", payload, this.getHttpOptions())
    );
  }

  //-----------------------------------------------------------------------------------------

  public kreirajOdjel(fakultet_id: string ,naziv: string): Observable<KreirajOdjelInterface> {
    let payload = {
      fakultet_id: fakultet_id,
      naziv: naziv
    };
    return <any>(
      this.http.post(this.url + "/odjel", payload, this.getHttpOptions())
    );
  }

  //-----------------------------------------------------------------------------------------

  
  public kreirajDatoteku(rad_id: number, payload: FormData, status_verzije_id: number): Observable<any> {
    
    let fd ={
      rad_id: rad_id,
      datoteka: payload
    }
    
    return <any>(
      this.http.post(this.url + "/ucitaj/"+ rad_id ,fd, this.getHttpOptions())
    );
  }

  //-----------------------------------------------------------------------------------------

  private getHttpOptions(): any {
    let headers = {
      "Content-Type": "application/json"
    };

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
