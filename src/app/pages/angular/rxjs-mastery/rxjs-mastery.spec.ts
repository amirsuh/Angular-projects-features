import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsMastery } from './rxjs-mastery';

describe('RxjsMastery', () => {
  let component: RxjsMastery;
  let fixture: ComponentFixture<RxjsMastery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsMastery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsMastery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
