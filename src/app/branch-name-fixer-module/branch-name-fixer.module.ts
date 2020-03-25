import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchNameFixerComponent } from './branch-name-fixer/branch-name-fixer.component';



@NgModule({
  declarations: [BranchNameFixerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    BranchNameFixerComponent
  ]

})
export class BranchNameFixerModule { }
