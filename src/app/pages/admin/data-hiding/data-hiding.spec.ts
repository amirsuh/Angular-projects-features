import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataHiding } from './data-hiding';

describe('DataHiding', () => {
  let component: DataHiding;
  let fixture: ComponentFixture<DataHiding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataHiding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataHiding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
