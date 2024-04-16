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
import { StorageService } from '@app/services/storage.service';
import { Router } from '@angular/router';
import { BaseModel, ModelError } from '@app/models/base-model';
import { UserLogin } from '@app/models/user-login';

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
  messageError: string = '';

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router) {
  }

  ngOnInit() {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/category']);
    }
  }


  onSubmit() {

    const { username, password } = this.form;
    console.log(username);
    console.log(password);

    this.authService.login(username, password).subscribe({
      next: (data: BaseModel<UserLogin>) => {
        console.log(data);
        this.storageService.saveUser(data);
        this.router.navigateByUrl('/category');

      },
      error: (err: any) => {
        const errorResponse = err.error as BaseModel<ModelError[]>;
        this.messageError = errorResponse.errors[0].key + ' ' + errorResponse.errors[0].message
      }
    });
  }

}
