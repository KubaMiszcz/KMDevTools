import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branch-name-fixer',
  templateUrl: './branch-name-fixer.component.html',
  styleUrls: ['./branch-name-fixer.component.scss']
})
export class BranchNameFixerComponent implements OnInit {
  branchName = '';
  fixedBranchName = '';
  prefix = '';

  constructor() {

  }

  ngOnInit(): void {
  }

  setPrefix(val: string) {
    this.prefix = val;
    this.rename();
  }

  rename() {
    this.fixedBranchName = this.prefix + this.branchName
      .replace(/ +/gi, ' ')
      .replace(/[/^;:~?*<>|\\]/gi, '')
      .replace(/[._\s]*$/, '')
      .replace(/[ ]/gi, '_')
      .replace(/,/gi, '_i_');
  }

  copyInputMessageToClipboard(inputElement) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

  pasteFromClipboard(event): any {
    let val = event.clipboardData.getData('text');
    setTimeout(() => {
      this.branchName = val;
      // this.guidToHex(val);
      // console.log('pasted guid:', val);
    }, 10);
  }

}
