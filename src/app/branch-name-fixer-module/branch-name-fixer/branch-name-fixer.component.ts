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
    console.log(val);

    this.prefix = val;
  }

  rename() {
    this.fixedBranchName = this.prefix + this.branchName
      .replace(/[/.^;:~?*<>|\\]/gi, '')
      .replace(/[ ]/gi, '_')
      .replace(/,/gi, '_i_')
      .replace(/_+/gi, '_');
  }

}



/*
 $("#branchname").on("change", function () {
        var source = document.getElementById('branchname').value;
        var target =
            $('input[name=customRadio]:checked')[0].value +
            source.replace(/ /gi, '_')
            .replace(/,/gi, '_i_');
        document.getElementById('fixedbranchname').value = target;
    });

    function rename(params) {
        var source = document.getElementById('branchname').value;
        var target =
            $('input[name=customRadio]:checked')[0].value +
            source.replace(/ /gi, '_')
            .replace(/,/gi, '_i_');
        document.getElementById('fixedbranchname').value = target;
    }

    function fixname(params) {
        rename();
    }
*/
