import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNumberItemComponent } from './page-number-item.component';

describe('PageNumberItemComponent', () => {
  let component: PageNumberItemComponent;
  let fixture: ComponentFixture<PageNumberItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNumberItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNumberItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
