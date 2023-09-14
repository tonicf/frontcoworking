

import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
name = new FormControl("", [Validators.maxLength(10), Validators.required]);
surname = new FormControl("", [Validators.maxLength(10), Validators.required]);
dni= new FormControl("", [Validators.required, Validators.pattern(/^\d{8}[a-zA-Z]$/)]);
email= new FormControl("", [Validators.required, Validators.email]);
numberPhone= new FormControl("", [Validators.required, Validators.pattern(/^\d{9}$/)]);
password= new FormControl("", [Validators.required, Validators.minLength(8)]);

constructor(public userService: UserService){}


register(){
  const user = { name: this.name.value, surnames: this.surname.value,
     dni: this.dni.value, email: this.email.value, 
     numberPhone: this.numberPhone.value, password: this.password.value};
     
     const urlDePostman = 'http://localhost:8080/api/v1/users';
  this.userService.register(JSON.stringify(user), urlDePostman).subscribe((data) => {
  console.log(data);
}  )

}
}