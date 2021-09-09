import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Designer } from './designer-models';


@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
})
export class DesignerComponent {
  public designers: Designer[];


  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.loadDesigner();
  }

  public deleteDesigner(designer: Designer) {
    this.http.delete(this.baseUrl + 'api/designers/' + designer.id).subscribe(result => {
      this.loadDesigner()
    }, error => console.error(error))
  }

  loadDesigner() {
    this.http.get<Designer[]>(this.baseUrl + 'api/designers').subscribe(result => {
      this.designers = result;
    }, error => console.error(error));
  }
}
