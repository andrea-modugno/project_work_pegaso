import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SustainabilityIntro } from './sustainability-intro';

describe('SustainabilityIntro', () => {
  let component: SustainabilityIntro;
  let fixture: ComponentFixture<SustainabilityIntro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SustainabilityIntro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SustainabilityIntro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
