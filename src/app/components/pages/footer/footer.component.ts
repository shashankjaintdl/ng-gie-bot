import { Component, OnInit } from '@angular/core';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { JKeys } from 'src/app/models/JKeys';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [NgxExtendedPdfViewerModule]
})
export class FooterComponent implements OnInit {

  _jKeys:JKeys=new JKeys();
  pdfSrc:string="";
  constructor() { }

  ngOnInit(): void {
    this.erase();
  }
 

  openTerms(){
    var screenWidth=window.innerWidth;
    var screenHeight=window.innerHeight;

    var screenPerc =((Number(screenWidth)/Number(window.screen.width))*100)-10;
    var screenHeightPerc=(Number(screenHeight))/3;
    var originalHeight=Number(window.screen.height)-Number(screenHeightPerc);
     //@ts-ignore
     const elem:HTMLElement = document.getElementsByTagName("embed");
    //  console.log("Modal"+elem)
     this.setStyleAttribute(elem[0], {'width':screenPerc+'%', 'height':originalHeight+"",'bottom':'30%'});
  }

  assign(){
    // this.pdfSrc='https://axagie.blob.core.windows.net/smarty/Chatbot-Privacy-Notice.pdf';
    this.pdfSrc='/assets/Chatbot-Privacy-Notice.pdf'
  }
  erase(){
    this.pdfSrc.replace(this.pdfSrc,'');

  }
  setStyleAttribute(element: HTMLElement, attrs: { [key: string]: Object }): void {
    if (attrs !== undefined) {
        Object.keys(attrs).forEach((key: string) => {
          //@ts-ignore
            element.style.setProperty(key,attrs[key]);
        });
    }
}

}
