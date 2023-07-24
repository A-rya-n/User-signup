import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../shared/services/login.service';
import { Login } from '../shared/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private snack: MatSnackBar,
    private loginService: LoginService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {}

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
  onSucess(token: string) {
    localStorage.setItem('accessToken', token);
    this.router.navigate(['/profile']);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const userData: Login = this.loginForm.value;
      this.loginService.loginUser(userData).subscribe(
        (response) => {
          console.log('Backend response: ', response);
          this.onSucess(response.token);
          this.snack.open('Login successful', undefined, {
            duration: 2000,
          });
        },
        (error) => {
          console.log('Error: ', error);
          this.onCancel();
        }
      );
    }
  }
}
