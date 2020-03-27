import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidToHexComponent } from './guid-to-hex.component';

describe('GuidToHexComponent', () => {
  let component: GuidToHexComponent;
  let fixture: ComponentFixture<GuidToHexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidToHexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidToHexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
