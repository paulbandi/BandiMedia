import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marketer } from './marketer-models';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-marketer-update',
  templateUrl: './marketer-update.component.html',
})
export class MarketerUpdateComponent {

  public marketer: Marketer = <Marketer>{};
  public param;


  ngOnInit() {
    this.routers.queryParams.subscribe(param => {
      this.param = param;
      this.loadMarketer();
    });
  }

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private routers: ActivatedRoute, private router: Router) { }

  loadMarketer() {
    this.http.get<Marketer>(this.baseUrl + 'api/marketers/' + this.param.id).subscribe(result => {
      this.marketer = result;
    }, error => console.error(error));
  }

  public saveMarketer() {
    this.http.put(this.baseUrl + 'api/marketers/' + this.marketer.id, this.marketer).subscribe(result => {
      this.router.navigateByUrl("/marketers");
    }, error => console.error(error));
  }
}
