import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() dataToModal: any;
  @Input() modalActive = false;
  @Output() closeModal: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  
  onClose() {
    this.closeModal.emit('close');
  }
}
