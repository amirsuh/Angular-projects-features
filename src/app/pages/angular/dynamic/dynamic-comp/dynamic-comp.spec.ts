import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComp } from './dynamic-comp';

describe('DynamicComp', () => {
  let component: DynamicComp;
  let fixture: ComponentFixture<DynamicComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
