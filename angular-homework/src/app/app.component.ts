import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , MatIconModule , MatButtonModule , MatToolbarModule , RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-homework';

  // constructor(private router: Router) {}

  // navigate(route: string) {
  //   this.router.navigate([route]);
  // }


}
