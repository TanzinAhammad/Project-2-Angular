import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [
    HomePageComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule
  ],
  exports:[
    HomePageComponent,
    CardComponent
  ]
})
export class HomeModule { }
