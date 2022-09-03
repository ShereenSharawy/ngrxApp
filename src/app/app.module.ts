import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CustomerModule } from './customer/customer.module';

import { reducers, metaReducers } from './store/index';
import { AppRoutingModule } from './app-routing.module';
import { GalleryModule } from './gallery/gallery.module';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerModule,
    GalleryModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([])
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
