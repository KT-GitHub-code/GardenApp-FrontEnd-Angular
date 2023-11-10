import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlantCreatorComponent } from './new-plant-creator.component';

describe('NewPlantCreatorComponent', () => {
  let component: NewPlantCreatorComponent;
  let fixture: ComponentFixture<NewPlantCreatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewPlantCreatorComponent]
    });
    fixture = TestBed.createComponent(NewPlantCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
