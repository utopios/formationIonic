import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { RouterModule, Routes } from '@angular/router';
import { DemoBisComponent } from './demo-bis/demo-bis.component';
import { HomeDemoComponent } from './home-demo/home-demo.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { GuardService } from '../services/guard.service';

//Les routes de notres modules démo
const routes: Routes = [
  {
    path: 'demo',
    children: [
      {
        path: '', component: DemoComponent,
        
      },
      {
        path: 'bis', component: DemoBisComponent,
        canActivate:[GuardService]
      },
      {
        path: 'bis/:id/:name', component: DemoBisComponent,
        canActivate:[GuardService]
      }
      
    ]
  }

]

@NgModule({
  declarations: [DemoComponent, DemoBisComponent, HomeDemoComponent],
  imports: [
    CommonModule,
    //Importe les routes avec routerModule
    RouterModule.forChild(routes),
    IonicModule.forRoot(),
    FormsModule
  ],
  exports: [HomeDemoComponent]
})
export class DemoModule { }
