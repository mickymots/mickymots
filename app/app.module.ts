import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { RouterModule }   from '@angular/router';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HomeComponent,ContactComponent ],
  bootstrap:    [ AppComponent ],
   RouterModule.forRoot([
      {
        path: '/contact',
        component: ContactComponent
      }, {
        path: '',
        component: HomeComponent
      }
    ])
})
export class AppModule { }
