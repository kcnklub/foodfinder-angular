import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceSwipperComponent } from './place-swipper.component';

describe('PlaceSwipperComponent', () => {
  let component: PlaceSwipperComponent;
  let fixture: ComponentFixture<PlaceSwipperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceSwipperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceSwipperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
