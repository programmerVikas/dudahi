import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DudahiMapComponent } from './dudahi-map.component';

describe('DudahiMapComponent', () => {
  let component: DudahiMapComponent;
  let fixture: ComponentFixture<DudahiMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DudahiMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DudahiMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
