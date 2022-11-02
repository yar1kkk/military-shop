import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  constructor() {}

  title = 'Shield shop';
  country = 'Ukraine';

  ngOnInit(): void {}
}
