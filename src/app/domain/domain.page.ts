import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../api/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.page.html',
  styleUrls: ['./domain.page.scss'],
})
export class DomainPage implements OnInit {
  results: any = [];

  constructor(public router: Router, public userservice: UserService) {

  }

  ngOnInit() {
  }

  opensignin() {
    let param = {
      "checkSubdomain": {
        "subdomain": "w2c"
      }
    }
    this.results = this.userservice.checkdomain(param);
    // this.router.navigate(['/login']);
    console.log(this.results);
  }

}
