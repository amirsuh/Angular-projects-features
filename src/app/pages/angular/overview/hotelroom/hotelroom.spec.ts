import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hotelroom } from './hotelroom';

describe('Hotelroom', () => {
  let component: Hotelroom;
  let fixture: ComponentFixture<Hotelroom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hotelroom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hotelroom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
