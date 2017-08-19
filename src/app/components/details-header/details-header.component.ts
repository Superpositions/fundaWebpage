import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details-header',
  templateUrl: './details-header.component.html',
  styleUrls: ['./details-header.component.scss']
})
export class DetailsHeaderComponent implements OnInit {
  @Input() streetName;
  @Input() postalNumber;
  @Input() place;
  constructor() { }

  ngOnInit() {
  }

}
