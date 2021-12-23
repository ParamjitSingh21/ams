import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private router: Router,
    private authService: AuthService) {
  }

  async checkIsAuthencated(): Promise<void> {
    if (await this.authService.checkAuthenticated()) {
      await this.router.navigate(['/']);
    }
  }
}
