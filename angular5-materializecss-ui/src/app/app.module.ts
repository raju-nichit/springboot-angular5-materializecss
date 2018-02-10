import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './header/header.component';
import {FormsModule} from '@angular/forms';
import {DataStorageService} from './shared/data-storage.service';
import {HttpClientModule} from '@angular/common/http';
import {LoggingService} from './shared/logging.service';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // RouterModule.forRoot(appRoutes),
  ],
  providers: [DataStorageService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
