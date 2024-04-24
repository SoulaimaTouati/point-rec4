import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
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
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AffecteradminpointrelaisComponent } from './espaceadminplateforme/affecteradminpointrelais/affecteradminpointrelais.component';
import { OptionsComponent } from './espaceadminplateforme/Options/options.component';
import { AprsidebarComponent } from './espaceadminpointrelais/aprsidebar/aprsidebar.component';
import { ConsulterdashboardComponent } from './espaceadminplateforme/consulterdashboard/consulterdashboard/consulterdashboard.component';
import { AgentsidebarComponent } from './espaceagentpointrelais/agentsidebar/agentsidebar/agentsidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import{MatListModule} from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';






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
    AffecteradminpointrelaisComponent,
    OptionsComponent,
    AprsidebarComponent,
    ConsulterdashboardComponent,
    AgentsidebarComponent,
    
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
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatFormFieldModule,
    MatListModule,
    MatSelectModule,

  ],
  providers: [
  
    provideClientHydration(),
        provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
