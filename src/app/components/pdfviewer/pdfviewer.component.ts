import { Component, OnInit } from '@angular/core';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';


@Component({
  selector: 'app-pdfviewer',
  templateUrl: './pdfviewer.component.html',
  styleUrls: ['./pdfviewer.component.css'],
  providers: [NgxExtendedPdfViewerModule]

})
export class PdfviewerComponent implements OnInit {
  pdfSrc='https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';

  constructor() { }

  ngOnInit(): void {
  }
}
