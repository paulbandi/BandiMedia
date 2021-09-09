
import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marketer } from './marketer-models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-marketer-add',
  templateUrl: './marketer-add.component.html',
})
export class MarketerAddComponent {

  public marketer: Marketer = <Marketer>{};

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router) { }

  public saveMarketer() {
    this.http.post(this.baseUrl + 'api/marketers', this.marketer).subscribe(result => {
      this.router.navigateByUrl("/marketers");
    }, error => console.error(error))
  }
}
