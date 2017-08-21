import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-gallery',
  templateUrl: './modal-gallery.component.html',
  styleUrls: ['./modal-gallery.component.scss']
})
export class ModalGalleryComponent implements OnInit {
  // Current image preset
  current = 0;
  @Input() dataToModal: any;
  @Input() modalActive = false;
  @Input() selectedImage: 0;
  @Output() closeModal: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  ngOnChanges() {
    if (this.dataToModal.length) {
      // reset navigator or set the preselected one from the component above
      this.current = this.selectedImage ? this.selectedImage : 0;
    }
  }

  // Move images foreward
  nextImage() {
    this.current < this.dataToModal.length ? ++this.current : this.current = 0;
  }

  // Move images backward
  prevImage() {
    this.current > 0 ? --this.current : this.current = this.dataToModal.length - 1;
  }

  onClose() {
    this.closeModal.emit('close');
  }
}
