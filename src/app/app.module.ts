import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollableBannerComponent } from './components/scrollable-banner/scrollable-banner.component';
import { InstructMembersComponent } from './components/instruct-members/instruct-members.component';
import { EventYtIframeComponent } from './components/event-yt-iframe/event-yt-iframe.component';
import { InfoComponent } from './components/info/info.component';
import { EnquiryComponent } from './components/enquiry/enquiry.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ScrollableBannerComponent,
    InstructMembersComponent,
    EventYtIframeComponent,
    InfoComponent,
    EnquiryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
