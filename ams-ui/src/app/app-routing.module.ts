import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideNavComponent } from './shared-component/side-nav/side-nav.component';
import { TopNavComponent } from './shared-component/top-nav/top-nav.component';

const routes: Routes = [
  {path: 'sideNav', component: SideNavComponent },
  { path: 'topNav', component: TopNavComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
