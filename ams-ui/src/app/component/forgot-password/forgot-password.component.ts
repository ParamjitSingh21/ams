import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { CommonService } from '../common-service/common.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  form: FormGroup;
  public loginInvalid = false;

  constructor(
    private fb: FormBuilder,
    private commonService: CommonService
  ) {
    this.commonService.checkIsAuthencated();
    this.form = this.fb.group({
      username: ['', Validators.email]
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    alert(this.form.get('username')?.value)
  }

}
