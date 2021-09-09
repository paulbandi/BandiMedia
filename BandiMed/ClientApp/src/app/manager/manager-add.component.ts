
import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Manager } from './manager-models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-manager-add',
  templateUrl: './manager-add.component.html',
})
export class ManagerAddComponent {

  public manager: Manager = <Manager>{};

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router) { }

  public saveManager() {
    this.http.post(this.baseUrl + 'api/managers', this.manager).subscribe(result => {
      this.router.navigateByUrl("/managers");
    }, error => console.error(error))
  }
}
