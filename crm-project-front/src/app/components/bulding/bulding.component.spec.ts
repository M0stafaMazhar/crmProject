import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuldingComponent } from './bulding.component';

describe('BuldingComponent', () => {
  let component: BuldingComponent;
  let fixture: ComponentFixture<BuldingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuldingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuldingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
