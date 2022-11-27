import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-upload-menu',
  templateUrl: './upload-menu.component.html',
  styleUrls: ['./upload-menu.component.css']
})
export class UploadMenuComponent implements OnInit {

  @ViewChild('modalContent') modalContent!: ElementRef;

  open = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.listen('window', 'click', (e: Event) => {
       if (e.target !== this.modalContent.nativeElement && this.open) {
        this.closeModal();
      }
    });
  }

  toggleModal(): void {
    this.open = !this.open;
  }

  closeModal(): void {
    this.open = false;
    console.log('closing!')
  }

}
