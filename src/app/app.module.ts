import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionComponent } from './components/section/section.component';
import { MainclassComponent } from './components/mainclass/mainclass.component';
import { CommentComponent } from './components/comment/comment.component';
import { ContactComponent } from './components/custom/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from './components/custom/services/contact.service';
import { HttpClientModule } from '@angular/common/http';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    MainclassComponent,
    CommentComponent,
    ContactComponent,
    SafeHtmlPipe,
    NotFoundComponent 
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  exports: [SafeHtmlPipe],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }