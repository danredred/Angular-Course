import { Component, HostListener, signal } from '@angular/core';

import { LifecycleComponent } from "./lifecycle/lifecycle.component";
import { CircleComponent } from './shared/circle/circle.component';

const coords = {x:0,y:0}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [LifecycleComponent, CircleComponent],
})
export class AppComponent {
  circleCount=4;

  constructor() {
    window.addEventListener('mousemove', this.updateCoords);
  }

  lifecycleComponentIsVisible = false;
  lifecycleInputText = 'Some Random Number: ' + Math.random() * 100;

  onToggleLifecycleComponentVisibility() {
    this.lifecycleComponentIsVisible = !this.lifecycleComponentIsVisible;
  }

  onChangeLifecycleInputText() {
    this.lifecycleInputText = 'Some Random Number: ' + Math.random() * 100;
  }

  updateCoords(e: { clientX: number; clientY: number }) {
    coords.x = e.clientX;
    coords.y = e.clientY;
  }
  counter(i:number){
    return Array.from({ length: i },(e,i)=>i);
  }
  coordOfIndex(i:number){
    return { x: coords.x  - 12 + 10 * i, y: coords.y - 12 + 10 * i };
  }
}
