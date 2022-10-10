import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { BoardDetailComponent } from './board-detail/board-detail.component';
import { GraphicAttributeComponent } from './graphic-attribute/graphic-attribute.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    BoardDetailComponent,
    GraphicAttributeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
