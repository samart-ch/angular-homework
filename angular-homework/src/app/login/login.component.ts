import { Component } from '@angular/core';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule for mat-button
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule for mat-card
import { MatIconModule }  from '@angular/material/icon';
import {FormsModule} from '@angular/forms';

import { LoginForm } from '../models/login/login-form';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatSelectModule, 
    MatInputModule, 
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  hide = true;
  form = new LoginForm();

  constructor() {

  }

  onSubmit() {

    const { username, password } = this.form;

    console.log(password);

  }

}
