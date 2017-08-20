import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.scss']
})
export class OfferDetailsComponent implements OnInit {
  @Input() shortDetails;
  @Input() details;
  
  constructor() { }

  ngOnInit() {
  }

}
