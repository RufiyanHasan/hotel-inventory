import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Room } from './romms';
import { HeaderComponent } from '../header/header.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem,
  CdkDrag,
  CdkDropList, } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-rooms-hotel',
  templateUrl: './rooms-hotel.component.html',
  styleUrls: ['./rooms-hotel.component.css']
})
export class RoomsHotelComponent implements OnInit, AfterViewInit {

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  testing = ['Get up forSchool', 'Teacher teeth', 'pRINCIPAL', 'Headmaster', 'Maths and Science'];



  hotelName = 'Rufiyan'
  noOfRooms = 10;
  rooms : Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
}

@ViewChild('test', {read: ViewContainerRef}) vcr!: ViewContainerRef;
@ViewChild('user', {static: true}) users!: ElementRef;
constructor(){

}

ngOnInit(): void {
  this.rooms = {
    totalRooms: 30,
    availableRooms: 5,
    bookedRooms: 2
  }
  if(this.users.nativeElement.classList.contains('active')){
    this.users.nativeElement.innerHTML = '<h1>There are 5 rooms available.</h1>';
  }
}

ngAfterViewInit(): void {
 const viewComp = this.vcr.createComponent(HeaderComponent);
 viewComp.instance.userName = "Hasan";
}

drop(event: CdkDragDrop<any[]>) {
  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex,
    );
  }
}

}
