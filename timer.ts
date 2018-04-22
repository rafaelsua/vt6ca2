import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'countdown',
  template: '<h1>Quedan: {{seconds}} </h1>'
})


class CountdownComponent {
  seconds: number = 25;
  intervalId: number;

  constructor() {
    this.intervalId = setInterval(() => this.tick(), 1000);
  }

  private tick(): void {
    if (--this.seconds < 1) {
      clearInterval(this.intervalId);
    }
  }
}