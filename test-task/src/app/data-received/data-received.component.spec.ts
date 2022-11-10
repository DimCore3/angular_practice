import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataReceivedComponent } from './data-received.component';

describe('DataReceivedComponent', () => {
  let component: DataReceivedComponent;
  let fixture: ComponentFixture<DataReceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataReceivedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
