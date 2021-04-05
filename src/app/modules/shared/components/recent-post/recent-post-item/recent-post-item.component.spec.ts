import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPostItemComponent } from './recent-post-item.component';

describe('RecentPostItemComponent', () => {
  let component: RecentPostItemComponent;
  let fixture: ComponentFixture<RecentPostItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentPostItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentPostItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
