import { Component } from '@angular/core';

@Component({
  selector: 'app-02_property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent {
  public imgSrc: string = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg';
  flag: boolean = true;
}
