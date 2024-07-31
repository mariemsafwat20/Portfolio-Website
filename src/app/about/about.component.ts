import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})

export class AboutComponent {
  cvUrl:string = 'assets/cv.pdf'
  cvName:string = 'My_CV.pdf'

}
