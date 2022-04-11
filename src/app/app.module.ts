import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HeaderComponent} from './components/header/header.component';
import {TodoPopupComponent} from './components/popups/todo-popup/todo-popup.component';
import {MaterialModule} from "./modules/material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {EffectsModule} from '@ngrx/effects';
import {TodoEffects} from './redux/effects/todo.effects';
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {metaReducers, reducers} from "./redux";
import {HotToastModule} from "@ngneat/hot-toast";
import {DynamicViewModule} from "@ngneat/overview";
import {ConfirmationPopupComponent} from './components/popups/confirmation-popup/confirmation-popup.component';
import {MAT_DIALOG_DEFAULT_OPTIONS} from "@angular/material/dialog";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoPopupComponent,
    TodoListComponent,
    ConfirmationPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreDevtoolsModule.instrument({maxAge: 25}),
    EffectsModule.forRoot([TodoEffects]),
    HotToastModule.forRoot({
      position: 'bottom-right'
    }),
    DynamicViewModule,
    FlexLayoutModule
  ],
  providers: [{
    provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {
      maxWidth: '500px',
      width: '100%',
      closeOnNavigation: true,
      disableClose: true,
      hasBackdrop: true
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
