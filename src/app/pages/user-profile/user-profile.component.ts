import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { FormControl, Validators } from '@angular/forms';
import { ReturnStatement } from '@angular/compiler';
import { eachWeekendOfInterval } from 'date-fns';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
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
  message: string | null = null;

  constructor(public userService: UserService) {}

  ngOnInit() {
    let id: any = localStorage.getItem('idUser');
    let token: any = localStorage.getItem('token');
    this.userService.getData(id, token).subscribe({
      next: (response: any) => {
        this.name.setValue(response.name);
        this.surname.setValue(response.surnames);
        this.dni.setValue(response.dni);
        this.email.setValue(response.email);
        this.numberPhone.setValue(response.numberPhone);
        this.password.setValue(response.password);
        localStorage.setItem('authorized', response.authorized);
      },
    });
  }
  setUserData() {
    let id: any = localStorage.getItem('idUser');
    let token: any = localStorage.getItem('token');
    const user = {
      name: this.name.value,
      surnames: this.surname.value,
      dni: this.dni.value,
      email: this.email.value,
      numberPhone: this.numberPhone.value,
      password: this.password.value,
    };
    this.userService.setData(user, id, token).subscribe({
      next: () => {
        this.message = 'Datos actualizados correctamente';
      },
      error: () => {
        this.message = 'Los datos no han podido ser actualizados';
      },
    });
  }
}
