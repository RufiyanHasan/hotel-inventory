import { Injectable } from '@angular/core';
import { RoomList } from './roomList';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { RoomPhotos } from './room-photos';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsListService {

  headers = new HttpHeaders({'token': '123vcxkmdc54km43np4l3yltkm'})
  // getRooms$ = this.http.get<RoomList[]>('/api/rooms', {
  //   headers: this.headers,
  // }).pipe(
  //   shareReplay(1)
  // );

    getRooms$ = this.http.get<RoomList[]>('/api/rooms').pipe(shareReplay(1));
  

  constructor(private http: HttpClient) { }




  roomlist: RoomList[] = [

  ]

  // roomlist: RoomList[] = [
  //   {
  //     roomNo: 1,
  //     roomType: "Deluxe",
  //     amenities: "TV, Wifi, AC"
  //   },
  //   {
  //     roomNo: 2,
  //     roomType: "Standard",
  //     amenities: "TV"
  //   },
  //   {
  //     roomNo: 3,
  //     roomType: "Suit",
  //     amenities: "TV, Wifi, AC, Refrigerator"
  //   },
  // ]

  // getRooms(){
  //   return this.roomlist;
  // }

  getRooms(){
    // const headerDict = {
    //   'Content-Type': 'application/json',
    //   'Accept': 'application/json',
    //   'Access-Control-Allow-Headers': 'Content-Type',
    //   'token': 'abcdefg',
    // }
    
    // const requestOptions = {                                                                                                                                                                                 
    //   headers: new HttpHeaders(headerDict), 
    // };
    // return this.http.get<RoomList[]>('/api/rooms', requestOptions)
    return this.http.get<RoomList[]>('/api/rooms')
  }

  addRoom(room: RoomList){
    // return this.http.post<RoomList[]>('/api/rooms', room, {
    //   headers: this.headers,
    // });
    return this.http.post<RoomList[]>('/api/rooms', room);
  }

  editRoom(room: RoomList){
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  }

  deleteRoom(id: string){
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`);
  }

  getRoomPhotos(){
    const request = new HttpRequest<RoomPhotos[]>('GET', "https://jsonplaceholder.typicode.com/photos",
    
    {
      reportProgress: true,
    })
    return this.http.request(request)
  }

}
