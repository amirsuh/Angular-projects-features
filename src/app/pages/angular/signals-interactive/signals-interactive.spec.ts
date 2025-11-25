import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsInteractive } from './signals-interactive';

describe('SignalsInteractive', () => {
  let component: SignalsInteractive;
  let fixture: ComponentFixture<SignalsInteractive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsInteractive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsInteractive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
