import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})

export class PortfolioComponent {
  boxes: number[] = [1, 2, 3, 4];

  HeptaWeb: string = 'https://github.com/mariemsafwat20/Hepta-Website'
  
}
