import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SideNavComponent } from './shared-component/side-nav/side-nav.component';
import { TopNavComponent } from './shared-component/top-nav/top-nav.component';

const routes: Routes = [
  { path: 'sideNav', component: SideNavComponent },
  { path: 'topNav', component: TopNavComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
