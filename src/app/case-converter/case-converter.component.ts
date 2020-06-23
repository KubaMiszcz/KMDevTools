import { CaseTypesEnum } from './../models/CaseTypes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-converter',
  templateUrl: './case-converter.component.html',
  styleUrls: ['./case-converter.component.scss']
})
export class CaseConverterComponent implements OnInit {

  casesArray = [];
  sourceCase: CaseTypesEnum;
  sourceContent = 'Angular is running in the development mode';

  targetCase: CaseTypesEnum;
  targetContent = '';

  constructor() {
    this.casesArray = Object.values(CaseTypesEnum);
  }

  ngOnInit(): void {
  }

  setSourceCase(val: any) {
    this.sourceCase = val;
    this.convertCase();
  }

  setTargetCase(val: any) {
    this.targetCase = val;
    this.convertCase();
  }

  convertCase() {
    let sourcePattern = / /gi;
    sourcePattern = /\s+[A-Za-z0-9]/gi;


    const targetPattern = '';


    let result = this.sourceContent;

    switch (this.sourceCase) {
      case CaseTypesEnum.ALLCAPS:
        sourcePattern = /\[A-Za-z0-9]/gi;
        break;

      case CaseTypesEnum.CamelCase:
        sourcePattern = /[A-Z]/g;
        break;

      case CaseTypesEnum.HumanCase:
        sourcePattern = /\s+[A-Za-z0-9]/g;
        break;

      case CaseTypesEnum.alllower:
        sourcePattern = /\[A-Za-z0-9]/gi;
        break;

      default:
        break;
    }



    switch (this.targetCase) {
      case CaseTypesEnum.ALLCAPS:
        result = this.sourceContent.replace(sourcePattern, (match, chr) => {
          const res = match.toUpperCase();
          return res;
        });
        break;

      case CaseTypesEnum.CamelCase:
        result = this.sourceContent.replace(sourcePattern, (match, chr) => {
          const res = match.replace(/ +/, '').toUpperCase();
          return res;
        });
        break;

      case CaseTypesEnum.HumanCase:
        result = this.sourceContent.replace(sourcePattern, (match, chr) => {
          const res = ' ' + match.toLowerCase();
          return res;
        });
        break;

      case CaseTypesEnum.Snake_case:
        result = this.sourceContent.replace(sourcePattern, (match, chr) => {
          const res = match.replace(/ +/, '_');
          return res;
        });
        break;

      case CaseTypesEnum.alllower:
        result = this.sourceContent.replace(sourcePattern, (match, chr) => {
          const res = match.toLowerCase();
          return res;
        });
        break;

      case CaseTypesEnum.kebabcase:
        result = this.sourceContent.replace(sourcePattern, (match, chr) => {
          const res = match.replace(/ +/, '-').toLowerCase();
          return res;
        });
        break;

      default:
        break;
    }

    this.targetContent = result;
    console.info('>>>info>>> ', result); // DEBUG only, remove it
  }


  copyInputMessageToClipboard(inputElement) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

  pasteFromClipboard(event): any {
    const val = event.clipboardData.getData('text');
    setTimeout(() => {
      this.sourceContent = val;
    }, 10);
  }

}
