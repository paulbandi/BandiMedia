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
import { ManagerComponent } from './manager/manager.component';
import { ManagerAddComponent } from './manager/manager-add.component';
import { ManagerUpdateComponent } from './manager/manager-update.component';
import { DesignerComponent } from './designer/designer.component';
import { DesignerAddComponent } from './designer/designer-add.component';
import { DesignerUpdateComponent } from './designer/designer-update.component';
import { MarketerComponent } from './marketers/marketer.component';
import { MarketerAddComponent } from './marketers/marketer-add.component';
import { MarketerUpdateComponent } from './marketers/marketer-update.component';

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
    PRUpdateComponent,
    ManagerComponent,
    ManagerAddComponent,
    ManagerUpdateComponent,
    DesignerComponent,
    DesignerAddComponent,
    DesignerUpdateComponent,
    MarketerComponent,
    MarketerAddComponent,
    MarketerUpdateComponent
    
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
      { path: 'managers', component: ManagerComponent },
      { path: 'manager-add', component: ManagerAddComponent },
      { path: 'manager-update', component: ManagerUpdateComponent },
      { path: 'designers', component: DesignerComponent },
      { path: 'designer-add', component: DesignerAddComponent },
      { path: 'designer-update', component: DesignerUpdateComponent },
      { path: 'marketers', component: MarketerComponent },
      { path: 'marketer-add', component: MarketerAddComponent },
      { path: 'marketer-update', component: MarketerUpdateComponent },
], { relativeLinkResolution: 'legacy' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
