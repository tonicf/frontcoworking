import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  dni = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\d{8}[a-zA-Z]$/),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  loginError: string | null = null;

  constructor(public userService: UserService, private router: Router) {}

  login() {
    const user = { dni: this.dni.value, password: this.password.value };
    this.userService.login(user).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        const id: any = jwtDecode(response.token);
        localStorage.setItem('idUser', id.id);
        this.router.navigate(['usuario']);
      },
      error: () => {
        this.loginError = 'Las credenciales no son correctas';
      },
    });
  }
}
