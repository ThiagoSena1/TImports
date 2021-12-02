import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XboxSeriesSComponent } from './xbox-series-s.component';

describe('XboxSeriesSComponent', () => {
  let component: XboxSeriesSComponent;
  let fixture: ComponentFixture<XboxSeriesSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XboxSeriesSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XboxSeriesSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
