import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Manager } from './manager-models';


@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
})
export class ManagerComponent {
  public managers: Manager[];


  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.loadManagers();
  }

  public deleteManager(manager: Manager) {
    this.http.delete(this.baseUrl + 'api/managers/' +manager.id).subscribe(result => {
      this.loadManagers()
    }, error => console.error(error))
  }

  loadManagers() {
    this.http.get<Manager[]>(this.baseUrl + 'api/managers').subscribe(result => {
      this.managers = result;
    }, error => console.error(error));
  }
}
