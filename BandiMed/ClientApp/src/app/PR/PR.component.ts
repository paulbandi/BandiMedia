import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PR } from './PR-models';


@Component({
  selector: 'app-pr',
  templateUrl: './PR.component.html',
})
export class PRComponent {
  public prs: PR[];


  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.loadPR();
  }

  public deletePR(pr: PR) {
    this.http.delete(this.baseUrl + 'api/prs/' + pr.id).subscribe(result => {
      this.loadPR()
    }, error => console.error(error))
  }

  loadPR() {
    this.http.get<PR[]>(this.baseUrl + 'api/prs').subscribe(result => {
      this.prs = result;
    }, error => console.error(error));
  }
}
