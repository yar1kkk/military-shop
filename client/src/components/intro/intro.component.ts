import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  constructor() {}

  items: string[] = [
    'About Us',
    'Videos',
    'Shop',
    'News & Articles',
    'Get in Touch',
  ];

  word1 = 'for';
  word2 = 'you';

  ngOnInit(): void {}
}
