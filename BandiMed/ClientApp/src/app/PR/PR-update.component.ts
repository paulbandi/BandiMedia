import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PR } from './PR-models';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-PR-update',
  templateUrl: './PR-update.component.html',
})
export class PRUpdateComponent {

  public pr: PR = <PR>{};
  public param;


  ngOnInit() {
    this.routers.queryParams.subscribe(param => {
      this.param = param;
      this.loadPRs();
    });
  }

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private routers: ActivatedRoute, private router: Router) { }

  loadPRs() {
    this.http.get<PR>(this.baseUrl + 'api/prs/' + this.param.id).subscribe(result => {
      this.pr = result;
    }, error => console.error(error));
  }

  public savePR() {
    this.http.put(this.baseUrl + 'api/prs/' + this.pr.id, this.pr).subscribe(result => {
      this.router.navigateByUrl("/prs");
    }, error => console.error(error));
  }
}
