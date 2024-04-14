import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule for mat-button
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule for mat-card
import { MatIconModule }  from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { LoginForm } from '@app/models/login-form';
import { AuthService } from '@app/services/auth.service';
import { ValidationErrorComponent } from "@app/validation-error/validation-error.component";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [
        MatSelectModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        FormsModule,
        CommonModule,
        ValidationErrorComponent,
    ]
})
export class LoginComponent {

  hide = true;
  form = new LoginForm();

  constructor(private authService: AuthService,) {

  }

  onSubmit() {

   
    const { username, password } = this.form;
    console.log(username);
    console.log(password);

    this.authService.login(username, password).subscribe({
      next: data => {
        console.log(data);
      },
      error: err => {
        console.error(err);
        console.log(err);
      }
    });

  }

}
