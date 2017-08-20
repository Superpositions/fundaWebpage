import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() images;
  isModalActive: boolean;
  dataToModal: any;
  constructor() { }

  ngOnInit() {
  }

  openPhotoLibrary(){
    debugger
  }

  modalClosed() {
    this.isModalActive = false;
  }
}
