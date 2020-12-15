import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field/typings/form-field-module';
import {
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatAutocompleteModule,
    MatExpansionModule
} from '@angular/material';
import { ItemService } from './services/item-service/item.service';
import {environment} from '../environments/environment'
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { PaymentPortalComponent } from './payment-portal/payment-portal.component';

const materialModules = [
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatAutocompleteModule,
    MatExpansionModule
];

import * as firebase from 'firebase';

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PaymentPortalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    materialModules,
    AngularFireModule.initializeApp(environment.firebase, 'user-authentication'),
    AngularFirestoreModule
  ],
  exports: materialModules,
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
