import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flexbox',
  template: `
    <div class="flex-container">
      <div class="flex-item">1</div>
      <div class="flex-item">2</div>
      <div class="flex-item">3</div>
      <div class="flex-item">4</div>
      <div class="flex-item">5</div>
      <div class="flex-item">6</div>
    </div>
  `,
  styles: [
    `.flex-container{display:flex;}
    .flex-item {
      width: 200px;
      height: 150px;
      background: tomato;
      color: white;
      font-weight: bold;
      font-size: 3em;
      text-align: center;
      line-height: 150px;
    }`
  ]
})
export class FlexboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
