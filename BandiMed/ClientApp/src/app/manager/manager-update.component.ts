import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Manager } from './manager-models';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-manager-update',
  templateUrl: './manager-update.component.html',
})
export class ManagerUpdateComponent {

  public manager: Manager = <Manager>{};
  public param;


  ngOnInit() {
    this.routers.queryParams.subscribe(param => {
      this.param = param;
      this.loadManagers();
    });
  }

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private routers: ActivatedRoute, private router: Router) { }

  loadManagers() {
    this.http.get<Manager>(this.baseUrl + 'api/managers/' + this.param.id).subscribe(result => {
      this.manager = result;
    }, error => console.error(error));
  }

  public saveManager() {
    this.http.put(this.baseUrl + 'api/managers/' + this.manager.id, this.manager).subscribe(result => {
      this.router.navigateByUrl("/managers");
    }, error => console.error(error));
  }
}
