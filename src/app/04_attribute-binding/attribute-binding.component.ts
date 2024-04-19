import { Component } from '@angular/core';

@Component({
  selector: 'app-04_attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrls: ['./attribute-binding.component.scss']
})
export class AttributeBindingComponent {
  public value: number = 30;

  decrease() {
    this.value -= 10;
  }

  increase() {
    this.value += 10;
  }
}
