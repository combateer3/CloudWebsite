import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FileBrowserComponent } from './file-browser/file-browser.component';
import { FileToolbarComponent } from './file-browser/file-toolbar/file-toolbar.component';
import { UploadMenuComponent } from './file-browser/file-toolbar/upload-menu/upload-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    FileBrowserComponent,
    FileToolbarComponent,
    UploadMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
