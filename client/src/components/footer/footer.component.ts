import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  helps: string[] = [
    '(067) 74 28 205',
    'slavkovaskiv@gmail.com',
    '(066) 75 30 820',
    's.t.a.s.2003zsa@gmail.com',
  ];

  categories: string[] = ['category', 'category', 'category', 'category'];

  company_features: string[] = [
    'About Us',
    'Our Story',
    'Partnership',
    'Video',
    'Reviews',
  ];

  ngOnInit(): void {}
}
