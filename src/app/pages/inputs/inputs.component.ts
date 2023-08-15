import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css'],
})
export class InputsComponent {
  testInput: string = '';

  form: FormGroup = new FormGroup({
    defaultInput: new FormControl('BANANA', Validators.required),
  });

  onSubmit(form: FormGroup) {
    if (form.valid) {
    } else {
      throw new Error('GANDA FALHA OH MANINHO');
    }
  }

  getDefaultInput(): FormControl {
    return this.form.get('defaultInput') as FormControl;
  }
}
