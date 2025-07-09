import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor (private http:AuthService){}
  regForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    confirmpassword: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });
  onSubmit() {
    if (!this.regForm.invalid) {
      this.http.register(this.regForm.value).subscribe({
        next(value) {
          localStorage.setItem('token', value.token);
        },
        error(err) {
          console.log(err)
        },
      });
    }
  }
}
