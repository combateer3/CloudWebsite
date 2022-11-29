import { Component, OnInit } from '@angular/core';
import { StorageFile } from './file'

@Component({
  selector: 'app-file-browser',
  templateUrl: './file-browser.component.html',
  styleUrls: ['./file-browser.component.css']
})
export class FileBrowserComponent implements OnInit {

  files: StorageFile[] = [
    new StorageFile("./file1.txt", "./image1.png"),
    new StorageFile("./file2.txt", "./image2.png"),
    new StorageFile("./file3.txt", "./image3.png")
  ];

  constructor() {}

  ngOnInit(): void {
  }

}
