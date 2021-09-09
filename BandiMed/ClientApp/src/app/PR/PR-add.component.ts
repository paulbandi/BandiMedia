
import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PR } from './PR-models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-PR-add',
  templateUrl: './PR-add.component.html',
})
export class PRAddComponent {

  public pr: PR = <PR>{};

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router) { }

  public savePR() {
    this.http.post(this.baseUrl + 'api/prs', this.pr).subscribe(result => {
      this.router.navigateByUrl("/prs");
    }, error => console.error(error))
  }
}
