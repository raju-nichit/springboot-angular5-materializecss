import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {DataStorageService} from '../../shared/data-storage.service';
import {UserModel} from '../user.model';
import {toast} from 'angular2-materialize';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private  router: Router, private dsService: DataStorageService) {
  }

  ngOnInit() {
  }

  onSignup(signUpForm: NgForm) {
    console.log(signUpForm);
    const user = new UserModel(
      undefined, signUpForm.value.firstName, signUpForm.value.lastName, signUpForm.value.email,
      signUpForm.value.password,undefined);
    console.log(user);
    this.dsService.sinupUser(user);
;
  }

  onCancel() {
    this.router.navigate(['/signin']);
  }

}
