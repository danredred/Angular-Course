import { style } from '@angular/animations';
import { Component, HostBinding, input } from '@angular/core';

@Component({
  selector: 'div.circle',
  standalone: true,
  imports: [],
  templateUrl: './circle.component.html',
  styleUrl: './circle.component.css',
  host:{
    '[style]':"{'left':x,'top':y}"
  }
})
export class CircleComponent {
  coords = input.required<{ x: number; y: number }>();
  //@HostBinding('style.left')
  get x() {
    return this.coords().x + 'px';
  }
  //@HostBinding('style.top')
  get y() {
    return this.coords().y + 'px';
  }
}
