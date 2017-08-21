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
  selectedImage: any;
  constructor() { }

  ngOnInit() {
  }

  // set selected image for displaying porper image on modal open pass it via Input
  setSelectedImage(index){
    this.selectedImage = index;
  }

  modalClosed() {
    this.isModalActive = false;
  }
}
