import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CookieModule } from 'ngx-cookie';
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule} from './app-routing.module';
import {RouterModule} from'@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { FooterComponent } from './components/pages/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { BotComponent } from './components/bot/bot.component';
import { NgxMicrosoftBotFrameworkModule } from 'ngx-microsoft-bot-framework';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import {OAuthModule} from 'angular-oauth2-oidc';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule } from "ngx-ui-loader";
import { CallbackComponent } from './components/callback/callback.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NavComponent,
    BotComponent,
    CallbackComponent,
    UnauthorizedComponent,
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    CookieModule.forRoot(),
    NgxMicrosoftBotFrameworkModule,
    BrowserModule,
    AppRoutingModule,
    NgxExtendedPdfViewerModule,
    OAuthModule.forRoot(),
    // AuthModule.forRoot(),
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({showForeground:true}),
    NgxUiLoaderRouterModule

  ],
  providers: [NgxMicrosoftBotFrameworkModule,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    // {provide:APP_INITIALIZER,useFactory:initializeAuthConfig,multi:true}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
