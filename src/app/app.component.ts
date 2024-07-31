import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { AboutComponent } from "./about/about.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroSectionComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular7Project';
}
