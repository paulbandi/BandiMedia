import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Designer } from './designer-models';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-designer-update',
  templateUrl: './designer-update.component.html',
})
export class DesignerUpdateComponent {

  public designer: Designer = <Designer>{};
  public param;


  ngOnInit() {
    this.routers.queryParams.subscribe(param => {
      this.param = param;
      this.loadDesigner();
    });
  }

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private routers: ActivatedRoute, private router: Router) { }

  loadDesigner() {
    this.http.get<Designer>(this.baseUrl + 'api/designers/' + this.param.id).subscribe(result => {
      this.designer = result;
    }, error => console.error(error));
  }

  public saveDesigner() {
    this.http.put(this.baseUrl + 'api/designers/' + this.designer.id, this.designer).subscribe(result => {
      this.router.navigateByUrl("/designers");
    }, error => console.error(error));
  }
}
