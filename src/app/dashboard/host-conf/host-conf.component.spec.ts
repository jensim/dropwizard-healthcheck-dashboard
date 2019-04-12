import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostConfComponent } from './host-conf.component';

describe('HostConfComponent', () => {
  let component: HostConfComponent;
  let fixture: ComponentFixture<HostConfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostConfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
