import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  private createForm(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    // this.connectionSvc.setLoggedIn(true);
  }

  ngOnInit() {
  }

}
