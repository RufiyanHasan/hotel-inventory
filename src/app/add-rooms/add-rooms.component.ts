import { Component, OnInit } from '@angular/core';
import { RoomList } from '../room-list/roomList';
import { RoomsListService } from '../room-list/rooms-list.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-rooms',
  templateUrl: './add-rooms.component.html',
  styleUrls: ['./add-rooms.component.css']
})
export class AddRoomsComponent implements OnInit {

  bookingForm!: FormGroup;

  room: RoomList = {
    roomNumber: '',
    roomType: '',
    amenities: '',
    price: 0,
    photos: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    rating: 0

  }

  successMessages: any;

  constructor(private roomsListService: RoomsListService, private fb: FormBuilder){
   
  }

  ngOnInit(){
    this.bookingForm = this.fb.group ({
      // roomId: new FormControl(''), You can use this also, but the below one is shortcut
      roomId: [''],
      guestEmail: [''],
      checkinTime: [''],
      checkOutTime: [''],
      mobileNumber: [''],
      country: this.fb.group({
        state: [''],
        city: [''],
      })
    })
  }

  addRooms(){
    this.roomsListService.addRoom(this.room).subscribe((data)=>{
      this.successMessages = data; 
      console.log(this.successMessages)
    })
  }

  addRoomsReactive(){
    // console.log(this.bookingForm.value)
    console.log(this.bookingForm.getRawValue()) //Use this it will value of the disable control
  }

}
