import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as guidToHex from 'uuid-to-hex';
import * as hexToGuid from 'hex-to-uuid';

/**
 * https://www.npmjs.com/package/hex-to-uuid
 * https://www.npmjs.com/package/uuid-to-hex
 * by Kirill Beresnev - DeRain
 * https://github.com/derain
 * Minsk, Belarus https://beresnev.pro
 */

@Component({
  selector: 'app-guid-to-hex',
  templateUrl: './guid-to-hex.component.html',
  styleUrls: ['./guid-to-hex.component.scss']
})
export class GuidToHexComponent implements OnInit {
  @ViewChild('guidInput') guidInput: ElementRef;
  @ViewChild('hexInput') hexInput: ElementRef;

  guid: string;
  hex: string; // = '0xd3fd354067184687956bc8618a26e335';

  fullAuto: boolean;
  showAlert: boolean;

  constructor() { }

  ngOnInit(): void {
    this.guid = '{d3fd3540-6718-4687-956b-c8618a26e335}';
    this.fullAuto = true;
    this.showAlert = false;
  }

  guidToHex(val: string) {
    if (val !== undefined) {
      this.hex = guidToHex(val.replace(/[{}]/gi, ''), false).toUpperCase();
      // this.hexInput.nativeElement.value = this.hex;
      console.log(this.guid, '   ===>>>   ', this.hex);
      if (this.fullAuto) {
        setTimeout(() => {
          this.copyInputMessageToClipboard(this.hexInput.nativeElement);
        }, 10);
      }
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 3000);
    }
  }

  hexToGuid(val) {
    if (val !== undefined) {
      this.guid = hexToGuid(val, false);
      // this.guidInput.nativeElement.value = this.guid;
      console.log(this.hex, '   ===>>>   ', this.guid);
      if (this.fullAuto) {
        setTimeout(() => {
          this.copyInputMessageToClipboard(this.guidInput.nativeElement);
        }, 10);
      }
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 3000);
    }
  }

  copyInputMessageToClipboard(inputElement) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

  pasteGuidFromClipboard(event): any {
    let val = event.clipboardData.getData('text');
    setTimeout(() => {
      this.guid = val;
      this.guidToHex(val);
      console.log('pasted guid:', val);
    }, 10);
  }

  pasteHexFromClipboard(event): any {
    let val = event.clipboardData.getData('text');
    setTimeout(() => {
      this.hex = val;
      this.hexToGuid(val);
      console.log('pasted hex:', val);
    }, 10);
  }



}
