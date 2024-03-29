import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }

  login(): void {}
  
get formControls() {
  return this.loginForm.controls;
}
}
