import { Component } from '@angular/core';
import { count } from "rxjs";

@Component({
  selector: 'app-03_event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent {

  handlerClick(event: any): void {
    console.log(event);
    for (let key in event){
      console.log(event[key])
    }
  }

  protected readonly event = event;

  handlerSave(): void {
    alert('Save')
  }

  protected readonly count = count;
}
