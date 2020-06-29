import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BaseComponent } from './base/base.component';
import { TabComponent } from './tab/tab.component';
import { HomeComponent } from './home/home.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { RemoteComponent } from './remote/remote.component';
import { SafePipe } from './safe.pipe';
import { HoverDirective } from './hover.directive';

@NgModule({
  declarations: [
    BaseComponent,
    TabComponent,
    HomeComponent,
    TutorialsComponent,
    RemoteComponent,
    SafePipe,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [BaseComponent]
})
export class AppModule { }
