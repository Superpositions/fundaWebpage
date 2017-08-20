import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.scss']
})
export class GmapComponent implements OnInit {
  @Input() lat;
  @Input() lng;
  @Input() markerTitle;
  @Input() iconUrl;
  constructor() { }

  ngOnInit() {
  }

}
