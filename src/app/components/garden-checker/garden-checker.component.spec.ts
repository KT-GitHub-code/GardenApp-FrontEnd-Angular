import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenCheckerComponent } from './garden-checker.component';

describe('GardenCheckerComponent', () => {
  let component: GardenCheckerComponent;
  let fixture: ComponentFixture<GardenCheckerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GardenCheckerComponent]
    });
    fixture = TestBed.createComponent(GardenCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
