import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit{
  public firstName: string = '';
  public lastName: string = '';

  ngOnInit(){
    this.firstName = 'John'
    this.lastName = 'Smith'
  }

  public getFullName(){
    return this.firstName + ' ' + this.lastName
  }

}
