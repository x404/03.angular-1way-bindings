import { Component } from '@angular/core';

@Component({
  selector: 'app-06_style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.scss']
})
export class StyleBindingComponent {
  isHighlighted: boolean = false;

  getDivColor() {
    return 'green'
  }
}
