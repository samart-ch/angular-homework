import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet , 
    MatIconModule , 
    MatButtonModule , 
    MatToolbarModule , 
    RouterModule , 
    CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'angular-homework';
  isDebug = environment.production;
  constructor(
    public authService: AuthService,
    private router: Router) {}

  // navigate(route: string) {
  //   this.router.navigate([route]);
  // }

  onLogout() {
    
    this.authService.logout()
    this.router.navigate(['/login'])
    
  }
}
