import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { ChildOneComponent } from './shared/component/child-one/child-one.component';
import { ChildTwoComponent } from './shared/component/child-two/child-two.component';
import { CardComponentComponent } from './shared/component/card-component/card-component.component';
import { PostCardComponent } from './post-card/post-card.component';
import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { MovieDashboardComponent } from './movie-dashboard/movie-dashboard.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildOneComponent,
    ChildTwoComponent,
    CardComponentComponent,
    PostCardComponent,
    PostDashboardComponent,
    MovieDashboardComponent,
    MovieCardComponent,
    ProductDashboardComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
