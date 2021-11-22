import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { ServerService } from './server.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { ListComponyComponent } from './list-compony/list-compony.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { UserDataComponent } from './user-data/user-data.component';
import { ScreenerPage1Component } from './screener-page1/screener-page1.component';
import { ScreenerPage2Component } from './screener-page2/screener-page2.component';
import { UserLoginComponent } from './user-login/user-login.component';
import {DatePipe, HashLocationStrategy, LocationStrategy} from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewCompanyComponent } from './view-company/view-company.component';



const appRoutes: Routes =[

  {
    path: '', 
    component : HomePageComponent
  },
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: 'admin/list_company',
    component: ListComponyComponent
  },
  {
    path: 'admin/add_company',
    component: AddCompanyComponent
  },
  {
    path: 'admin/edit_company',
    component: EditCompanyComponent
  },
  {
    path: 'admin/user_data',
    component: UserDataComponent
  },
  {
    path: 'screener_page1',
    component: ScreenerPage1Component
  },
  {
    path: 'screener_page2',
    component: ScreenerPage2Component
  },
  {
    path: 'admin',
    component: LoginPageComponent
  },
  {
    path: 'admin/view_company',
    component: ViewCompanyComponent
  },
  
]


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ListComponyComponent,
    AddCompanyComponent,
    EditCompanyComponent,
    UserDataComponent,
    ScreenerPage1Component,
    ScreenerPage2Component,
    UserLoginComponent,
    HomePageComponent,
    ViewCompanyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServerService,DatePipe,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
