import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ClientComponent } from './client/client.component';
import { ClientAddComponent } from './client/client-add.component';
import { ClientUpdateComponent } from './client/client-update.component';
import { PRComponent } from './PR/PR.component';
import { PRAddComponent } from './PR/PR-add.component';
import { PRUpdateComponent } from './PR/PR-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ClientComponent,
    ClientAddComponent,
    ClientUpdateComponent,
    PRComponent,
    PRAddComponent,
    PRUpdateComponent
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'clienti', component: ClientComponent },
      { path: 'client-add', component: ClientAddComponent },
      { path: 'client-update', component: ClientUpdateComponent },
      { path: 'prs', component: PRComponent },
      { path: 'PR-add', component: PRAddComponent },
      { path: 'PR-update', component: PRUpdateComponent },
], { relativeLinkResolution: 'legacy' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
