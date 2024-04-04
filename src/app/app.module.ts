import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminplateformeComponent } from './espaceadminplateforme/adminplateforme/adminplateforme.component';
import { AdminpointrlaisComponent } from './espaceadminpointrelais/adminpointrlais/adminpointrlais.component';
import { AgentpointrelaisComponent } from './espaceagentpointrelais/agentpointrelais/agentpointrelais.component';
import { SigninComponent } from './account/signin/signin.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { SuiviColisComponent } from './suivi-colis/suivi-colis/suivi-colis.component';
import { PointrelaisComponent } from './espaceadminplateforme/pointrelais/pointrelais.component';
import { SidebarComponent } from './espaceadminplateforme/sidebar/sidebar.component';
import { AddadminplateformeComponent } from './espaceadminplateforme/addadminplateforme/addadminplateforme.component';
import { AdminpointrelaisComponent } from './espaceadminplateforme/adminpointrelais/adminpointrelais.component';




@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    AdminplateformeComponent,
    SigninComponent,
    AdminpointrlaisComponent,
    AgentpointrelaisComponent,
    SuiviColisComponent,
    PointrelaisComponent,
    SidebarComponent,
    AddadminplateformeComponent,
    AgentpointrelaisComponent,
    AdminpointrelaisComponent,
    PointrelaisComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    HttpClientModule,FormsModule,
    FormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatDialogModule,
    
  ],
  providers: [
  
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
