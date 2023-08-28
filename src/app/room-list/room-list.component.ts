import { Component, Inject, OnInit } from '@angular/core';
import { RoomList } from './roomList';
import { RoomsListService } from './rooms-list.service';
import { LocalStorageToken } from '../localStorage';
import { Observable } from 'rxjs';
import { RoomPhotos } from './room-photos';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
showDetails = [];
public hotelsName: any;

roomlist: RoomList[] = [];
roomPhotos: any = [];
totalBytes: number = 0;

stream = new Observable((observer)=>{
  observer.next('user1');
  observer.next('user2');
  observer.next('user3');
  observer.complete();
})

  constructor(private roomListService: RoomsListService, @Inject(LocalStorageToken) private localStorage: Storage){
  }

  ngOnInit(): void{
    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (err) => console.log(err)
    })
    // this.roomlist = this.roomListService.getRooms();
    this.roomListService.getRooms$.subscribe((rooms) =>{
      this.roomlist = rooms;
    })
    this.stream.subscribe((data)=>{
      console.log(data);
    })
    console.log(this.roomlist)
    let HotelName = this.localStorage.getItem('name')
    this.hotelsName = HotelName;

    this.roomListService.getRoomPhotos().subscribe((event)=>{
      // this.roomPhotos = data;
      console.log(event)
      switch (event.type){
        case HttpEventType.Sent: {
          console.log("Request has been made.");
          break;
        }
        case HttpEventType.ResponseHeader : {
          console.log("Request success");
          break
        }
        case HttpEventType.DownloadProgress : {
          this.totalBytes+= event.loaded;
          break;
        }
        case HttpEventType.Response : {
          console.log(event.body)
        }
      }

    })
  }

  selectRoom(room: any){
    this.showDetails = room;
  }

  addRoom(){
    const room : RoomList = {
      roomNumber: '4',
      roomType: 'Super Luxury',
      amenities: 'Private pool',
      price: 1000,
      photos: 'testing',
      checkinTime: new Date('20-Jul-2023'),
      checkoutTime: new Date('22-Jul-2023'),
      rating: 4.5,
    }
    // this.roomlist.push(room);
    this.roomListService.addRoom(room).subscribe((data)=>{
      console.log(data);
      this.roomlist = data;
    })
  }

  editRoom(){
    const room : RoomList = {
      roomNumber: '3',
      roomType: 'Super Luxury',
      amenities: 'Private pool',
      price: 1000,
      photos: 'testing',
      checkinTime: new Date('20-Jul-2023'),
      checkoutTime: new Date('22-Jul-2023'),
      rating: 4.5,
    }
    this.roomListService.editRoom(room).subscribe((data)=>{
      this.roomlist = data;
    })
  }

  deletedRoom(){
    this.roomListService.deleteRoom('3').subscribe((data)=>{
      this.roomlist = data;
    })
  }

}
