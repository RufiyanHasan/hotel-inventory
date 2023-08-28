import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomListComponent } from './room-list/room-list.component';
import { HeaderComponent } from './header/header.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { RoomsHotelComponent } from './rooms-hotel/rooms-hotel.component';
import { AddRoomsComponent } from './add-rooms/add-rooms.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'roomslist', component: RoomListComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'rooms/addRooms', component: AddRoomsComponent},
  {path: 'datepicker', component: DatepickerComponent},
  {path: 'rooms', component: RoomsHotelComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/rooms', pathMatch: "full"},
  {path: '**', redirectTo: '/rooms'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
