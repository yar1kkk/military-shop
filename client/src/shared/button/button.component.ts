import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  constructor(content: Node) {
    this.content = content;
  }

  @Input() content: Node;

  ngOnInit(): void {}
}
