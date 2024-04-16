import { Component, EventEmitter, Input, Output } from '@angular/core';
import { map, takeWhile, timer } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-count-down',
  standalone: true,
  imports: [
    CommonModule,
    ],
  templateUrl: './count-down.component.html',
  styleUrl: './count-down.component.css'
})
export class CountDownComponent {

  @Input() seconds = 300;
  @Output() update = new EventEmitter<number>()

  timeRemaining: any

ngOnInit(): void {

  this.update.emit(300);

  this.timeRemaining = timer(0, 1000).pipe(
    map(n => (this.seconds - n) * 1000),
    takeWhile(n  =>  this.shouldThisSubscriptionBeAlive(n)),
  )
  
}
   
  shouldThisSubscriptionBeAlive(n: number): boolean {
   
    if(n >= 0) {
      this.update.emit(n);
    }

    return n >= 0
  }
}


