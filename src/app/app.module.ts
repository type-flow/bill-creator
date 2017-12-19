import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule   } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from './../environments/environment';

import { MaterialModule } from './material/material.module';
import { AppRoutingModule }     from './app-routing.module';


import { CustomerService } from './services/customer.service';
import { BillService } from './services/bill.service';
import { PdfService } from './services/pdf.service';

import { AppComponent } from './app.component';
import { PrintComponent } from './pages/print/print.component';
import { BillFormComponent } from './components/bill-form/bill-form.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BillsComponent } from './pages/bills/bills.component';
import { DialogConfirmComponent } from './components/dialog-confirm/dialog-confirm.component';
import { CustomerListItemComponent } from './components/customer-list-item/customer-list-item.component';
import { BillListComponent } from './components/bill-list/bill-list.component';
import { BillListItemComponent } from './components/bill-list-item/bill-list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    PrintComponent,
    BillFormComponent,
    CustomerFormComponent,
    CustomerListComponent,
    CustomersComponent,
    NavigationComponent,
    DashboardComponent,
    BillsComponent,
    DialogConfirmComponent,
    CustomerListItemComponent,
    BillListComponent,
    BillListItemComponent
  ],
  entryComponents: [
    DialogConfirmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    CustomerService,
    BillService,
    PdfService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
