import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { RouterModule, Routes } from '@angular/router';
import { DemoBisComponent } from './demo-bis/demo-bis.component';
import { HomeDemoComponent } from './home-demo/home-demo.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

//Les routes de notres modules démo
const routes:Routes = [
  {
    path:'', component:DemoComponent,
  },
  {
    path:'bis', component:DemoBisComponent,
  },
  {
    path:'bis/:id/:name', component:DemoBisComponent,
  }
]

@NgModule({
  declarations: [DemoComponent, DemoBisComponent, HomeDemoComponent],
  imports: [
    CommonModule,
    //Importe les routes avec routerModule
    RouterModule.forRoot(routes),
    IonicModule.forRoot(),
    FormsModule
  ],
  exports:[HomeDemoComponent]
})
export class DemoModule { }
