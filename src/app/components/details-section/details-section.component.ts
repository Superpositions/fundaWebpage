import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details-section',
  templateUrl: './details-section.component.html',
  styleUrls: ['./details-section.component.scss']
})
export class DetailsSectionComponent implements OnInit {
  @Input() text;
  isTextClosed = true;

  constructor() { }

  ngOnInit() {
  }

}
