import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CookieModule } from 'ngx-cookie';
import { HttpModule } from '@angular/http'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule} from './app-routing.module';
import {RouterModule} from'@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { FooterComponent } from './components/pages/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/pages/nav/nav.component';
import { BotComponent } from './components/bot/bot.component';
import { NgxMicrosoftBotFrameworkModule } from 'ngx-microsoft-bot-framework';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import {OAuthModule} from 'angular-oauth2-oidc';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule } from "ngx-ui-loader";
import { CallbackComponent } from './components/callback/callback.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { RedirectComponent } from './components/pages/redirect/redirect.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { GuardGuard } from './services/-guard.guard';
import { ChatReportsComponent } from './components/reports/chat-reports/chat-reports.component';
import { SideNavComponent } from './components/pages/side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoutComponent } from './components/pages/logout/logout.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
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
    RedirectComponent,
    ChatReportsComponent,
    SideNavComponent,
    LogoutComponent,
    DashboardComponent,
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
    FormsModule,

    // AuthModule.forRoot(),
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({showForeground:true}),
    NgxUiLoaderRouterModule,
    // BrowserAnimationsModule

  ],
  providers: [NgxMicrosoftBotFrameworkModule,GuardGuard,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: HTTP_INTERCEPTORS,useClass: TokenInterceptorService, multi: true}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
