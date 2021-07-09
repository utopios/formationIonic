import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { RouterModule, Routes } from '@angular/router';
import { DemoBisComponent } from './demo-bis/demo-bis.component';
import { HomeDemoComponent } from './home-demo/home-demo.component';
import { IonicModule } from '@ionic/angular';

//Les routes de notres modules démo
const routes:Routes = [
  {
    path:'', component:DemoComponent,
  },
  {
    path:'bis', component:DemoBisComponent,
  }
]

@NgModule({
  declarations: [DemoComponent, DemoBisComponent, HomeDemoComponent],
  imports: [
    CommonModule,
    //Importe les routes avec routerModule
    RouterModule.forRoot(routes),
    IonicModule.forRoot()
  ],
  exports:[HomeDemoComponent]
})
export class DemoModule { }
