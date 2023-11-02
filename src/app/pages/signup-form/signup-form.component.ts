import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent {
  name = new FormControl('', [Validators.maxLength(10), Validators.required]);
  surname = new FormControl('', [
    Validators.maxLength(10),
    Validators.required,
  ]);
  dni = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\d{8}[a-zA-Z]$/),
  ]);
  email = new FormControl('', [Validators.required, Validators.email]);
  numberPhone = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\d{9}$/),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  registerError: string | null = null;

  constructor(public userService: UserService, private router: Router) {}

  register() {
    const user = {
      name: this.name.value,
      surnames: this.surname.value,
      dni: this.dni.value,
      email: this.email.value,
      numberPhone: this.numberPhone.value,
      password: this.password.value,
    };

    this.userService.register(user).subscribe({
      next: () => {
        this.userService
          .login({
            dni: user.dni,
            password: user.password,
          })
          .subscribe({
            next: (response) => {
              localStorage.setItem('token', response.token);
              const id: any = jwtDecode(response.token);
              localStorage.setItem('idUser', id.id);
              this.router.navigate(['usuario']);
            },
          });
      },
      error: () => {
        this.registerError = 'Usuario ya registrado';
      },
    });
  }
}
