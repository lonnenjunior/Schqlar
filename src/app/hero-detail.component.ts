import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { states, Address, Hero } from './data-model';

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html'
})
/*export class HeroDetailComponent {
  heroForm = new FormGroup({
    name: new FormControl()
  });
}*/

export class HeroDetailComponent {
  heroForm: FormGroup; // <--- heroForm is of type FormGroup
  hero: Hero = new Hero();

  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required], // <--- the FormControl called "name"
      address: this.fb.group(new Address()),
      power: '',
      sidekick: ''
    });
    this.heroForm.setValue({
      name:    this.hero.name,
      address: this.hero.addresses[0] || new Address()
    });
  }
}

// FORM CONTROLS
/*
myControl.value:	the value of a FormControl.
myControl.status: the validity of a FormControl. Possible values: VALID, INVALID, PENDING, or DISABLED.
myControl.pristine: true if the user has not changed the value in the UI. Its opposite is myControl.dirty.
myControl.untouched: true if the control user has not yet entered the HTML control and triggered its blur event. Its opposite is myControl.touched.
*/