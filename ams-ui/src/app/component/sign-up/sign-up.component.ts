import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup; 
  hide = true;
  public signUpInvalid = false;
  startDate = new Date(1990, 0, 1);
  private formSubmitAttempt = false;
  private returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/game';
    this.signUpForm = this.fb.group({
      firstname: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      password: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstname: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      password: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
    });
  }

  async onSubmit(): Promise<void> {
    
    console.log(this.signUpForm.value);
  
  }
}
