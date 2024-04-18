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

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
