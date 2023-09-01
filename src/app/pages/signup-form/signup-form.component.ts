import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
name = new FormControl("", [Validators.maxLength(10), Validators.required]);
lastname = new FormControl("", [Validators.maxLength(10), Validators.required]);
dni= new FormControl("", [Validators.required, Validators.pattern(/^\d{8}[a-zA-Z]$/)]);
email= new FormControl("", [Validators.required, Validators.email]);
numberPhone= new FormControl("", [Validators.required, Validators.pattern(/^\d{9}$/)]);
password= new FormControl("", [Validators.required, Validators.minLength(8)]);

constructor(public userService: UserService){}




register(){
  const user = { name: this.name, lastname: this.lastname, dni: this.dni, email: this.email, numberPhone: this.numberPhone, passwor: this.numberPhone};
  this.userService.register(user).subscribe((data) => {
  console.log(data);
}  )

}
}
