import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {

  @Input() isDisabled?= false

  _value: string = ""

  constructor() { }

  onChange = (v: any) => { }
  onTouch: any = () => { }

  public get value(): string {
    return this._value;
  }

  public set value(value: string) {
    this._value = value
    this.onChange(value)
  }

  writeValue(obj: any): void {
    this.value = obj
    this.onChange(obj)
    this.onTouch()
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled
  }
}
