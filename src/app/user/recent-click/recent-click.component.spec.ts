import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentClickComponent } from './recent-click.component';

describe('RecentClickComponent', () => {
  let component: RecentClickComponent;
  let fixture: ComponentFixture<RecentClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentClickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
