import { Component } from '@angular/core';

@Component({
  selector: 'app-05_class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.scss']
})
export class ClassBindingComponent {
  allClasses: string = "accent-border error-text highlighted";
  currentClasses: string = "";

  isAccentBorder = false;
  isErrorText = false;
  isHighlighted = false;

  toggleAllClasses(){
    this.currentClasses = this.currentClasses == "" ? this.allClasses : ""
  }
}
