import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  public isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private router: Router, private cookies: CookieService) {
  }

  async checkAuthenticated(): Promise<boolean> {
    const authenticated = this.cookies.check('token');
    this.isAuthenticated.next(authenticated);
    return authenticated;
  }

  async login(username: string, password: string): Promise<void> {
   //do authenication

    this.isAuthenticated.next(true);

    this.cookies.set("token","paramCookie");
    await this.router.navigate(['/']);
  }

  async logout(): Promise<void> {
    try {
      this.cookies.deleteAll;
      this.isAuthenticated.next(false);
      await this.router.navigate(['/']);
    } catch (err) {
      console.error(err);
    }
  }
}