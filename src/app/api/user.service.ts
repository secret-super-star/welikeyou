import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HTTP
  ) {

  }

  // checkdomain(data): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     let header = new HttpHeaders();
  //     header.append('Content-Type', 'application/json');
  //     this.http.post(environment.apiurl + 'checkSubdomain/?token='+environment.apitooken, JSON.stringify(data), {headers: header}).subscribe((response) => {
  //       resolve(response);
  //     })
  //   })
  // }

  checkdomain(data): Promise<any> {
    return new Promise((resolve, reject) => {
      let params = {
        "checkSubdomain": {
          "subdomain": "w2c"
        }
      }
      let headers = {
        'Content-Type': 'application/json'
      };
      this.http.post(environment.apiurl + 'checkSubdomain/?token=' + environment.apitooken, params, headers)
        .then(data => {
          resolve(data.data);
        })
        .catch(error => {
          console.log(error);
        });
    })
  }

}
