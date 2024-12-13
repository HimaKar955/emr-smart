import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ExternalLabsModalComponent } from './external-labs-modal/external-labs-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    // other components
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ExternalLabsModalComponent,
    // other modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}