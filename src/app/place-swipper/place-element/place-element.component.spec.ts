import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceElementComponent } from './place-element.component';

describe('PlaceElementComponent', () => {
  let component: PlaceElementComponent;
  let fixture: ComponentFixture<PlaceElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
