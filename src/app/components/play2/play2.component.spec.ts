import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Play2Component } from './play2.component';

describe('Play2Component', () => {
  let component: Play2Component;
  let fixture: ComponentFixture<Play2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Play2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Play2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
