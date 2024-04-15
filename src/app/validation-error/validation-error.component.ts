import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { NgModel } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-validation-error',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule
  ],
  templateUrl: './validation-error.component.html',
  styleUrl: './validation-error.component.css'
})

export class ValidationErrorComponent {
  @Input() control!: NgModel;
  @Input() messages: { [key: string]: string } = {};
  @Input() submitted: boolean = false;
}
