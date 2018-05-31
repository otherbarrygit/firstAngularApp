import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
    <button mat-button>
      <mat-icon>face</mat-icon>
    </button>
    <mat-checkbox>cockadoodle</mat-checkbox>
  `,
  styles: []
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
