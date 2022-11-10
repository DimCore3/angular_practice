import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { LinkComponent } from './ui/link/link.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { DataReceivedComponent } from './data-received/data-received.component';

@NgModule({
  declarations: [
    AppComponent, 
    CardComponent, 
    FooterComponent, 
    LinkComponent, 
    NavigationBarComponent, 
    DataReceivedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
