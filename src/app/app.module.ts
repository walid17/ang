import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule, CollapseModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { DataService } from './GlobalService';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModel, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ButtonsModule.forRoot(),
    AppRoutingModule,
    AlertModule.forRoot(),
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    CollapseModule.forRoot()

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
