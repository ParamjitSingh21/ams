import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './component/authguard/auth-guard.service';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { IndexComponent } from './component/index/index.component';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '', component: IndexComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
