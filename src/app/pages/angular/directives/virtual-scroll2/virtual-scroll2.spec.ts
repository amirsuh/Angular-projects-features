import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualScroll2 } from './virtual-scroll2';

describe('VirtualScroll2', () => {
  let component: VirtualScroll2;
  let fixture: ComponentFixture<VirtualScroll2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VirtualScroll2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualScroll2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
