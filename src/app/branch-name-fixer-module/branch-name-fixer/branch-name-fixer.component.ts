import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branch-name-fixer',
  templateUrl: './branch-name-fixer.component.html',
  styleUrls: ['./branch-name-fixer.component.scss']
})
export class BranchNameFixerComponent implements OnInit {
  branchName: string;
  fixedBranchName: string;
  prefix = '';

  constructor() { }

  ngOnInit(): void {
  }

  setPrefix(val: string) {
    this.prefix = val;
  }

  rename() {
    this.fixedBranchName = this.prefix + this.branchName
      .replace(/ +/gi, ' ')
      .replace(/[/^;:~?*<>|\\]/gi, '')
      .replace(/[._\s]*$/, '')
      .replace(/[ ]/gi, '_')
      .replace(/,/gi, '_i_');
  }

}
