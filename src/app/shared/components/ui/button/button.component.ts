import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() type: string = "button"

  @Output() click: EventEmitter<any> = new EventEmitter<any>()

  onClick() {
    this.click.emit()
  }
}
