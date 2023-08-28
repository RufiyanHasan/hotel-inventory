import { Component, Inject, OnInit } from '@angular/core';
import { LocalStorageToken } from './localStorage';
import { InitService } from './init.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'hotelinventry';

  constructor(@Inject(LocalStorageToken) private localStorage: Storage, private initService: InitService, private router: Router){
    console.log(initService.config)
  }

  ngOnInit(): void {
    // this.router.events.subscribe((event)=>{
    //   console.log(event);
    // })

    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)
    ).subscribe((event)=>{
      console.log('Navigation Started')
    });

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event)=>{
      console.log('Navigation Ended')
    });

    this.localStorage.setItem('name', 'Taj Hotel');
  }
}
