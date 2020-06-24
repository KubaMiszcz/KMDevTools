import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branch-name-fixer',
  templateUrl: './branch-name-fixer.component.html',
  styleUrls: ['./branch-name-fixer.component.scss']
})
export class BranchNameFixerComponent implements OnInit {
  branchName = '';
  fixedBranchName = '';
  prefix = 'km-temp\\';

  constructor() {

  }

  ngOnInit(): void {
  }

  setPrefix(val: any) {
    if (!!val?.target?.textContent || (val?.target?.textContent === 'none')) {
      this.prefix = val.target.textContent;
    }
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
    const val = event.clipboardData.getData('text');
    setTimeout(() => {
      this.branchName = val;
      // this.guidToHex(val);
      // console.log('pasted guid:', val);
    }, 10);
  }

}
