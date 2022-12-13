import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WegHomeComponent } from './weg-home.component';

describe('WegHomeComponent', () => {
  let component: WegHomeComponent;
  let fixture: ComponentFixture<WegHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WegHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WegHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
