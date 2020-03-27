import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuidToHexComponent } from './guid-to-hex/guid-to-hex.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [GuidToHexComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    GuidToHexComponent
  ]
})
export class GuidToHexModule { }
