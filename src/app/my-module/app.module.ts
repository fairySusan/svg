import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeatProgressComponent } from '../heat-progress/heat-progress.component';
import { BrowserModule } from '@angular/platform-browser';
import { FloatFontComponent } from '../float-font/float-font.component';

@NgModule({
   imports: [
      CommonModule,
      BrowserModule
   ],
   declarations: [
      AppComponent,
      HeatProgressComponent,
      FloatFontComponent
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
