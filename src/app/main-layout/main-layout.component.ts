import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
})
export class MainLayoutComponent {
  isAutenticated: Boolean = false;

  constructor(public userService: UserService) {}

  ngOnInit() {}

  ngDoCheck() {
    const token = localStorage.getItem('token');
    if (token) {
      this.isAutenticated = true;
    } else {
      this.isAutenticated = false;
    }
  }
}
