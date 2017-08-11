import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from './services/data.service';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { HistoryComponent } from './components/history/history.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';

const appRoutes: Routes = [
    {path:"", component: HomeComponent},
    {path:"about", component: AboutComponent},
    {path:"history", component: HistoryComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    HistoryComponent,
    ContentComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
