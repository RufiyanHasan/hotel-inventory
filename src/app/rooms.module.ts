import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsHotelComponent } from './rooms-hotel/rooms-hotel.component';
import { RoomListComponent } from './room-list/room-list.component';
// import { AddRoomsComponent } from './add-rooms/add-rooms.component';


@NgModule({
  declarations: [
    // RoomsHotelComponent,
    // RoomListComponent
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
  ]
})
export class RoomsModule { }

