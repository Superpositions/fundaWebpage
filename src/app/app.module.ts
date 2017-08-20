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
import { AgmCoreModule } from '@agm/core';

import { CONSTANTS } from '../environments/constants';
import { GmapComponent } from './components/gmap/gmap.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { DetailsSectionComponent } from './components/details-section/details-section.component';
import { OfferDetailsComponent } from './components/offer-details/offer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsViewComponent,
    HeaderComponent,
    DetailsHeaderComponent,
    CarouselComponent,
    GmapComponent,
    ErrorMessageComponent,
    GalleryComponent,
    DetailsSectionComponent,
    OfferDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FlexLayoutModule,
    SwiperModule,
    AgmCoreModule.forRoot({
      apiKey: CONSTANTS.GMAPS_KEY
    })
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
