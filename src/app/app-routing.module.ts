import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuiviColisComponent } from './suivi-colis/suivi-colis/suivi-colis.component';
import { SigninComponent } from './account/signin/signin.component';
import { AdminplateformeComponent } from './espaceadminplateforme/adminplateforme/adminplateforme.component';
import { AdminpointrlaisComponent } from './espaceadminpointrelais/adminpointrlais/adminpointrlais.component';
import { AgentpointrelaisComponent } from './espaceagentpointrelais/agentpointrelais/agentpointrelais.component';
import { PointrelaisComponent } from './espaceadminplateforme/pointrelais/pointrelais.component';
import { AddadminplateformeComponent } from './espaceadminplateforme/addadminplateforme/addadminplateforme.component';
import { AdminpointrelaisComponent } from './espaceadminplateforme/adminpointrelais/adminpointrelais.component';
import { AffecteradminpointrelaisComponent } from './espaceadminplateforme/affecteradminpointrelais/affecteradminpointrelais.component';
import { OptionsComponent } from './espaceadminplateforme/Options/options.component';
import { ConsulterdashboardComponent } from './espaceadminplateforme/consulterdashboard/consulterdashboard/consulterdashboard.component';
import { AgentsidebarComponent } from './espaceagentpointrelais/agentsidebar/agentsidebar/agentsidebar.component';
import { AjoutercolisadelivreComponent } from './espaceagentpointrelais/ajoutercolisadelivre/ajoutercolisadelivre.component';
import { RetourcolisComponent } from './espaceagentpointrelais/retourcolis/retourcolis.component';
import { DashboardComponent } from './espaceadminpointrelais/dashboard/dashboard.component';
import { CreeragentpointrelaisComponent } from './espaceadminpointrelais/creeragentpointrelais/creeragentpointrelais.component';
import { DashboardadminpComponent } from './espaceadminplateforme/dashboardadminp/dashboardadminp/dashboardadminp.component';
import { ConsulterdashboardagentComponent } from './espaceagentpointrelais/consulterdashboard/consulterdashboardagent.component';
import { PointrelaisadminComponent } from './espaceadminpointrelais/pointrelaisadmin/pointrelaisadmin.component';
import { DonneespersonnellesconsulterComponent } from './espaceadminplateforme/donneespersonnellesconsulter/donneespersonnellesconsulter.component';
import { ModifierdonneesComponent } from './espaceadminplateforme/modifierdonnees/modifierdonnees.component';
import { DashComponent } from './dash/dash.component';
import { AddpointsrelaisComponent } from './espaceadminplateforme/addpointsrelais/addpointsrelais.component';

const routes: Routes = [
  {path:'suivis-colis',component:SuiviColisComponent},
  {path:'espace administrative',component:SigninComponent},
  {path:'adminplateforme',component:AdminplateformeComponent},
  {path:'adminpointrlais',component:AdminpointrlaisComponent},
  {path:'agentpointrelais',component:AgentpointrelaisComponent},
  {path:'pointrelais',component:PointrelaisComponent},
  {path:'addadminp',component:AddadminplateformeComponent},
  {path:'adminPr',component:AdminpointrelaisComponent},
  {path:'affecteradminpointreais',component:AffecteradminpointrelaisComponent},
  {path:'option',component:OptionsComponent},
  {path:'consulter-dashboard/:id',component:ConsulterdashboardComponent},
  {path:'side',component:AgentsidebarComponent},
  {path:'ajoutercolisadélivré',component:AjoutercolisadelivreComponent},
  {path:'retourcolis',component:RetourcolisComponent},
  {path:'dashboardpointrelais',component:DashboardComponent},
  {path:'creeragentpointrelais',component:CreeragentpointrelaisComponent,},
  {path:'dashboardadminp',component:DashboardadminpComponent},
  {path:'dashboard',component:ConsulterdashboardagentComponent},
  {path:'pointrelaisadmin',component:PointrelaisadminComponent},
  {path:'donneesadminplateform',component:DonneespersonnellesconsulterComponent},
  {path:'modifierdonnesplateforme',component:ModifierdonneesComponent},
  {path:'dash',component:DashComponent},
  {path: 'addpointsrelais',component:AddpointsrelaisComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
