import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantAddedComponent } from './plant-added.component';

describe('PlantAddedComponent', () => {
  let component: PlantAddedComponent;
  let fixture: ComponentFixture<PlantAddedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantAddedComponent]
    });
    fixture = TestBed.createComponent(PlantAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
