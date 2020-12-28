import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoNavbarComponent } from './photo-navbar.component';

describe('PhotoNavbarComponent', () => {
  let component: PhotoNavbarComponent;
  let fixture: ComponentFixture<PhotoNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
