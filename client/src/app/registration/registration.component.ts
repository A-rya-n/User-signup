import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../shared/registration.service';
import { Register } from '../shared/register.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  hide: boolean = true;
  registrationForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegistrationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      user: ['dev', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {}

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const userData: Register = this.registrationForm.value;
      this.registerService.registerUser(userData).subscribe(
        (response) => {
          console.log('Backend response: ', response);
          this.onCancel();
        },
        (error) => {
          console.error('Error sending data: ', error);
          this.onCancel();
        }
      );
    }
  }
}
