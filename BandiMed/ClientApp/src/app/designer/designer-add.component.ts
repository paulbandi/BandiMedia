
import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Designer } from './designer-models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-designer-add',
  templateUrl: './designer-add.component.html',
})
export class DesignerAddComponent {

  public designer: Designer = <Designer>{};

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router) { }

  public saveDesigner() {
    this.http.post(this.baseUrl + 'api/designers', this.designer).subscribe(result => {
      this.router.navigateByUrl("/designers");
    }, error => console.error(error))
  }
}
