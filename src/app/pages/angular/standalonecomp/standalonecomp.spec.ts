import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Standalonecomp } from './standalonecomp';

describe('Standalonecomp', () => {
  let component: Standalonecomp;
  let fixture: ComponentFixture<Standalonecomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Standalonecomp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Standalonecomp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
