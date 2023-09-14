import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
   
  constructor (private router: Router){
  }
  ngOnInit(){}

  redirigirContacto(){

  this.router.navigate(['contacto']);
  
}
}
