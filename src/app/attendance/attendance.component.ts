import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {
  @ViewChild('attendanceInput') attendanceInput: ElementRef;
  attendanceMessage: string;

  fullAuto: boolean;
  showAlert: boolean;

  workDayHours = 8;

  constructor() { }

  ngOnInit(): void {
    this.generateAttendanceMessage();
  }

  copyInputMessageToClipboard(inputElement) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

  generateAttendanceMessage() {
    // [Attendance] 06/04/2020 08:05 - 16:05
    const today = new Date();
    this.attendanceMessage = '[Attendance] '
      + today.getDate().toString().toString().padStart(2, '0') + '/' + today.getMonth().toString().padStart(2, '0') + '/' + today.getFullYear() + ' '
      + today.getHours().toString().padStart(2, '0') + ':' + today.getMinutes().toString().padStart(2, '0')
      + ' - ' + (today.getHours() + this.workDayHours).toString().padStart(2, '0') + ':' + today.getMinutes().toString().padStart(2, '0');
  }
}
