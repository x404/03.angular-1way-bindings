import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './01_interpolation/interpolation.component';
import { RouterLink, RouterLinkActive, RouterModule, Routes } from "@angular/router";
import { PropertyBindingComponent } from './02_property-binding/property-binding.component';
import { EventBindingComponent } from './03_event-binding/event-binding.component';
import { AttributeBindingComponent } from './04_attribute-binding/attribute-binding.component';
import { ClassBindingComponent } from './05_class-binding/class-binding.component';
import { StyleBindingComponent } from './06_style-binding/style-binding.component';

const appRoutes: Routes = [
  { path: 'interpolation', component: InterpolationComponent},
  { path: 'property_bindings', component: PropertyBindingComponent},
  { path: 'event_binding', component: EventBindingComponent},
  { path: 'attr_binding', component: AttributeBindingComponent},
  { path: 'class_binding', component: ClassBindingComponent},
  { path: 'style_binding', component: StyleBindingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    AttributeBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    RouterLink,
    RouterLinkActive,
    RouterLink,
    RouterLinkActive,
    RouterLink,
    RouterLinkActive
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
