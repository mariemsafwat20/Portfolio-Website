import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})

export class FooterComponent {
  phoneNumber: string = '01284759521';
  email: string = 'mariemsafwat20@gmail.com';
  location: string = 'El-Shorouk City, Cairo';

  facebookUrl: string = 'https://www.facebook.com';
  linkedinUrl: string = 'https://www.linkedin.com/in/mariam-safwat-2313461a4/';
  githubUrl: string = 'https://github.com/mariemsafwat20';
}
