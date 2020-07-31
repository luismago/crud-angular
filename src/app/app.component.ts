import { Component, VERSION, ViewChild, ElementRef, NgZone } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
     items = Array.from(Array(5).keys());

  shuffle() {
    this.items = shuffle(this.items);
  }
}


function shuffle(arr) {
  return arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);
}


