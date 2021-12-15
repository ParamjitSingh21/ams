import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './component/authguard/auth-guard.service';
import { IndexComponent } from './component/index/index.component';
import { LoginComponent } from './component/login/login.component';
import { SideNavComponent } from './shared-component/side-nav/side-nav.component';
import { TopNavComponent } from './shared-component/top-nav/top-nav.component';

const routes: Routes = [
  { path: 'sideNav', component: SideNavComponent },
  { path: 'topNav', component: TopNavComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: IndexComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
