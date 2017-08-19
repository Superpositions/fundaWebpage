import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsViewComponent } from './views/details-view/details-view.component';
import { DataService } from './services/data.service';
import { HeaderComponent } from './components/header/header.component';
import { DetailsHeaderComponent } from './components/details-header/details-header.component';
import { SwiperModule } from 'angular2-useful-swiper';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsViewComponent,
    HeaderComponent,
    DetailsHeaderComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FlexLayoutModule,
    SwiperModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
