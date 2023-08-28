import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsHotelComponent } from './rooms-hotel.component';

describe('RoomsHotelComponent', () => {
  let component: RoomsHotelComponent;
  let fixture: ComponentFixture<RoomsHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomsHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
