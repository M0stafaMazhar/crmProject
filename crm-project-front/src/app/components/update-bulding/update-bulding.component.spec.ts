import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBuldingComponent } from './update-bulding.component';

describe('UpdateBuldingComponent', () => {
  let component: UpdateBuldingComponent;
  let fixture: ComponentFixture<UpdateBuldingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBuldingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBuldingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
