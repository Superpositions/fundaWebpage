import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsViewComponent } from './details-view.component';

describe('DetailsViewComponent', () => {
  let component: DetailsViewComponent;
  let fixture: ComponentFixture<DetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
