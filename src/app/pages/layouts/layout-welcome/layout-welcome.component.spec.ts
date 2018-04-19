import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutWelcomeComponent } from './layout-welcome.component';

describe('LayoutWelcomeComponent', () => {
  let component: LayoutWelcomeComponent;
  let fixture: ComponentFixture<LayoutWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
