import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {
  
  fullScore: number = 0
  score: number = 0

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {

    this.fullScore = this.activatedRoute.snapshot.queryParams['fullScore'];
    this.score = this.activatedRoute.snapshot.queryParams['score'];
    
  }

  gotoCategory() {
    this.router.navigate(['/category']);
  }

}
