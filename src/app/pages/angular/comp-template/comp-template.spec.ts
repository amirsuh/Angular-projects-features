import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTemplate } from './comp-template';

describe('CompTemplate', () => {
  let component: CompTemplate;
  let fixture: ComponentFixture<CompTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
