import { Component, OnInit } from '@angular/core';
import * as guidToHex from 'uuid-to-hex';
import * as hexToGuid from 'hex-to-uuid';

@Component({
  selector: 'app-guid-to-hex',
  templateUrl: './guid-to-hex.component.html',
  styleUrls: ['./guid-to-hex.component.scss']
})
export class GuidToHexComponent implements OnInit {
  guid: string = '{d3fd3540-6718-4687-956b-c8618a26e335}';
  hex: string; // = '0xd3fd354067184687956bc8618a26e335';

  constructor() { }

  ngOnInit(): void {
  }

  guidToHex(val: string) {
    if (val !== undefined) {
      this.hex = guidToHex(val.replace(/[{}]/gi, ''), false).toUpperCase();
      console.log(this.guid, '   ===>>>   ', this.hex);
    }
  }

  hexToGuid(val) {
    if (val !== undefined) {
      this.guid = hexToGuid(val, false);
      console.log(this.hex, '   ===>>>   ', this.guid);
    }
  }

  copyInputMessageToClipboard(inputElement) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }
}
