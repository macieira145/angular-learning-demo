import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InputsComponent } from './inputs.component';
import { DefaultLayoutComponent } from 'src/app/shared/layouts/default/default.component';
import { InputModule } from 'src/app/shared/components/inputs/input/input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'src/app/shared/components/ui/button/button.module';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: InputsComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    InputsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    InputModule,
    DefaultLayoutComponent,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule
  ]
})
export class InputsModule { }
