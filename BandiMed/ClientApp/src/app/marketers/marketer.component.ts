import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marketer } from './marketer-models';


@Component({
  selector: 'app-marketer',
  templateUrl: './marketer.component.html',
})
export class MarketerComponent {
  public marketers: Marketer[];


  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.loadMarketer();
  }

  public deleteMarketer(marketer: Marketer) {
    this.http.delete(this.baseUrl + 'api/marketers/' + marketer.id).subscribe(result => {
      this.loadMarketer()
    }, error => console.error(error))
  }

  loadMarketer() {
    this.http.get<Marketer[]>(this.baseUrl + 'api/marketers').subscribe(result => {
      this.marketers = result;
    }, error => console.error(error));
  }
}
