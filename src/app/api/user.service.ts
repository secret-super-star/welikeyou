import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {
    var fomdata = new FormData();
  }

  checkdomain(data): Promise<any> {
    return new Promise((resolve, reject) => {
      let header = new HttpHeaders();
      header.append('Content-Type', 'application/json');
      this.http.post(environment.apiurl + 'checkSubdomain/?token='+environment.apitooken, JSON.stringify(data), {headers: header}).subscribe((response) => {
        resolve(response);
      })
    })
  }

}
