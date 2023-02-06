import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellUnitComponent } from './sell-unit.component';

describe('SellUnitComponent', () => {
  let component: SellUnitComponent;
  let fixture: ComponentFixture<SellUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellUnitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
