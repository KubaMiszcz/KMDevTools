import { CaseConverterComponent } from './case-converter/case-converter.component';
import { SharedModule } from './shared/shared.module';
import { GuidToHexModule } from './guid-to-hex/guid-to-hex.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BranchNameFixerModule } from './branch-name-fixer-module/branch-name-fixer.module';
import { AttendanceComponent } from './attendance/attendance.component';

@NgModule({
  declarations: [
    AppComponent,
    AttendanceComponent,
    CaseConverterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BranchNameFixerModule,
    GuidToHexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
