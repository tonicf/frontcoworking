import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  email = new FormControl("", [Validators.required, Validators.email]);
  password = new FormControl("", [Validators.required, Validators.minLength(8)]);

  constructor(public userService: UserService) {}

  login() {    
    const user = { email: this.email, password: this.password };
    this.userService.login(user).subscribe((data) => {
      console.log(data);
    });
  }
}


