import { BranchNameFixerModule } from './branch-name-fixer/branch-name-fixer.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BranchNameFixerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
