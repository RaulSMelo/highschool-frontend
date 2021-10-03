import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

import { HeaderComponent } from './components/header/header.component';
import { MenuSidenavComponent } from './components/menu-sidenav/menu-sidenav.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [ 
    HeaderComponent,
    MenuSidenavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    SharedModule,

    /* MODULES MATERIAL-DESIGN */
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule
  ],
  exports: [
    
    /* MODULES */
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    SharedModule,

    /* COMPONENTS */
    HeaderComponent,
    MenuSidenavComponent,
    FooterComponent
  ]
})
export class CoreModule { }
