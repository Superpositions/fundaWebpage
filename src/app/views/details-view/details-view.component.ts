import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.scss']
})
export class DetailsViewComponent implements OnInit {
  errorMessage: any;
  media: any;
  propertyDetails: any;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.loadDetails().subscribe(
      details => {
        this.propertyDetails = details;
        this.media = this.propertyDetails.Media;
      },
      error => {
        // Displaying Error to user, improving UX
        this.errorMessage = 'There seems to be an error ' +  error.statusText + ', with error status ' + error.status;
        // Logging error for debug purposes
        console.error('Error ', error) 
      }
    );
  }
}
