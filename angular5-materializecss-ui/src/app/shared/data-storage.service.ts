import {Injectable} from '@angular/core';
import {UserModel} from '../auth/user.model';
import {HttpClient} from '@angular/common/http';
import {toast} from 'angular2-materialize';
import {Router} from '@angular/router';
import {AppConstant} from '../app.constant';
import {LoggingService} from './logging.service';

@Injectable()
export class DataStorageService {

  constructor(private __httpClient: HttpClient, private  router: Router, private logService: LoggingService) {
  }

  sinupUser(user: UserModel) {
    this.__httpClient.post(AppConstant.SIGNUP_URL, user)
      .subscribe((data: any) => {
        this.logService.successLogging('User Successfully registered');
        this.router.navigate(['/signin']);
      }, (error) => {
        this.logService.errorLoggging(error);
        console.log(error.error.message);
        toast(error.error.message, 2000, 'red rounded');
      });
  }

  userSingin(user: UserModel) {
    this.__httpClient.post(AppConstant.SIGNIN_URL, user).subscribe((response: Response) => {
      // user:UserModel = response;
      localStorage.setItem('authToken', user.authToken);
      console.log(localStorage.getItem('authToken'));
    }, (error) => {
      console.log(error.error.message);
      toast(error.error.message, 2000, 'red rounded');
    });
  }
}
