import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSelector } from './report-selector.component';

describe('ReportSelector', () => {
  let component: ReportSelector;
  let fixture: ComponentFixture<ReportSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportSelector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportSelector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
