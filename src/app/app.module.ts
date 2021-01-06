import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieModule } from 'ngx-cookie';
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { FooterComponent } from './components/pages/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { BotComponent } from './components/bot/bot.component';
import { NgxMicrosoftBotFrameworkModule } from 'ngx-microsoft-bot-framework';
import { PdfviewerComponent } from './components/pdfviewer/pdfviewer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NavComponent,
    BotComponent,
    PdfviewerComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    CookieModule.forRoot(),
    NgxMicrosoftBotFrameworkModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
