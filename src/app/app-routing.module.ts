import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassroomDetailsComponent } from './classroom-details/classroom-details.component';
import { PricesComponent } from './pages/prices/prices.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { ContactComponent } from './pages/contact/contact.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SignupFormComponent } from './pages/signup-form/signup-form.component';

const routes: Routes = [
  {path: '',
  component: MainLayoutComponent},
  
  { path: 'inicio', component: InicioComponent },
  { path: 'espacios', component: ClassroomDetailsComponent },
  { path: 'precios', component: PricesComponent },
  { path: 'acceso-miembros', component: LoginFormComponent },
  { path: 'registro', component: SignupFormComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'actualizar-usuario', component: UpdateUserComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
