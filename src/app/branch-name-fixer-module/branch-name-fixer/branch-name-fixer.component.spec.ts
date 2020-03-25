import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchNameFixerComponent } from './branch-name-fixer.component';

describe('BranchNameFixerComponent', () => {
  let component: BranchNameFixerComponent;
  let fixture: ComponentFixture<BranchNameFixerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchNameFixerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchNameFixerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
