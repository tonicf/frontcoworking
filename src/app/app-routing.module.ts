import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassroomDetailsComponent } from './pages/classroom/classroom-details/classroom-details.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { ContactComponent } from './pages/contact/contact.component';
import { InicioComponent } from './pages/home/inicio.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { SignupFormComponent } from './pages/signup-form/signup-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }, // Ruta base redirige a inicio
  { path: 'inicio', component: InicioComponent },
  { path: 'espacios', component: ClassroomDetailsComponent },
  { path: 'acceso-miembros', component: LoginFormComponent },
  { path: 'registro', component: SignupFormComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'usuario', component: UserProfileComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
