import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment } from '../store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
  standalone: true,
})
export class CounterControlsComponent {
  constructor(private store: Store<{counter:number}>) {}

  increment() {
    this.store.dispatch(increment({value:1}));
  }

  decrement() {
    this.store.dispatch(decrement({ value: 1 }));
  }
}
