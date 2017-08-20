import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.scss']
})
export class DetailsViewComponent implements OnInit {
  mediaLargeImages = [];
  mediaMediumImages = [];
  media: any;
  lng: any;
  lat: any;
  errorMessage: any;
  propertyDetails: any;
  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.loadDetails().subscribe(
      details => {
        this.propertyDetails = details;
        this.media = this.propertyDetails.Media;
        this.lng = details.WGS84_X;
        this.lat = details.WGS84_Y;
        this.propertyDetails.Media.map(item => {
          if (item.MediaItems[item.MediaItems.length - 2]) {
            // Collect medium size images for displaying in carousel
            this.mediaMediumImages.push(item.MediaItems[item.MediaItems.length - 2].Url);
          }
          // colleting largest images
          if (item.MediaItems[item.MediaItems.length - 1]) {
            this.mediaLargeImages.push(item.MediaItems[item.MediaItems.length - 1].Url);
          }
        });

      },
      error => {
        // Displaying Error to user, improving UX
        this.errorMessage = 'There seems to be an error ' + error.statusText + ', with error status ' + error.status;
        // Logging error for debug purposes
        console.error('Error ', error);
      }
    );
  }
}
