import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XboxOneXComponent } from './xbox-one-x.component';

describe('XboxOneXComponent', () => {
  let component: XboxOneXComponent;
  let fixture: ComponentFixture<XboxOneXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XboxOneXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XboxOneXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
