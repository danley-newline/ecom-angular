import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductBoxComponent } from './pages/home/components/product-box/product-box.component';
import { CartComponent } from './pages/cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { CartService } from './services/cart.service';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(fr);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductBoxComponent,
    CartComponent,

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    CartService,
    ApiService
  ],
  exports:[
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
