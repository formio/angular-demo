import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenComponent } from './kitchen.component';

describe('KitchenComponent', () => {
  let component: KitchenComponent;
  let fixture: ComponentFixture<KitchenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
