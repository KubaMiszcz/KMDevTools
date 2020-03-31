import { GuidToHexModule } from './guid-to-hex/guid-to-hex.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BranchNameFixerModule } from './branch-name-fixer-module/branch-name-fixer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BranchNameFixerModule,
    GuidToHexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
