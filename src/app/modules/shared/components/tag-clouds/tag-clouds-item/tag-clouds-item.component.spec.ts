import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagCloudsItemComponent } from './tag-clouds-item.component';

describe('TagCloudsItemComponent', () => {
  let component: TagCloudsItemComponent;
  let fixture: ComponentFixture<TagCloudsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagCloudsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagCloudsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
