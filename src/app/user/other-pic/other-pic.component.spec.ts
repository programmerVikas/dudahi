import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherPicComponent } from './other-pic.component';

describe('OtherPicComponent', () => {
  let component: OtherPicComponent;
  let fixture: ComponentFixture<OtherPicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherPicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
