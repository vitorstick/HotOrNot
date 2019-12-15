import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main-page/main/main.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AppRoutingModule } from './app.routing';
import { ButtonComponent } from './main-page/button/button.component';
import { StatsComponent } from './main-page/stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainPageComponent,
    ButtonComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
