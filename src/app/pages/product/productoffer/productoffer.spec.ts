import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productoffer } from './productoffer';

describe('Productoffer', () => {
  let component: Productoffer;
  let fixture: ComponentFixture<Productoffer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productoffer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productoffer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
