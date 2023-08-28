import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsHotelComponent } from './rooms-hotel/rooms-hotel.component';
import { RoomListComponent } from './room-list/room-list.component';
import { HeaderComponent } from './header/header.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import {CdkDrag} from '@angular/cdk/drag-drop';
import {CdkDropList} from '@angular/cdk/drag-drop';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { RequestInterceptor } from './request.interceptor';
import { InitService } from './init.service';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AddRoomsComponent } from './add-rooms/add-rooms.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HoverDirective } from './hover.directive';
import { EmailvalidatorDirective } from './email-validator/emailvalidator.directive';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

function initFactory(InitService: InitService){
  return () => InitService.init();
}


@NgModule({
  declarations: [
    AppComponent,
    RoomsHotelComponent,
    RoomListComponent,
    HeaderComponent,
    DatepickerComponent,
    NavbarComponent,
    AddRoomsComponent,
    FileUploadComponent,
    HoverDirective,
    EmailvalidatorDirective,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    CdkDrag,
    CdkDropList,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [InitService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
