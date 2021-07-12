import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { FormPersonComponent } from './form-person/form-person.component';
import { MenuPersonComponent } from './menu-person/menu-person.component';
import { ItemPersonComponent } from './item-person/item-person.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DetailPersonComponent } from './detail-person/detail-person.component';
import { GuardService } from '../services/guard.service';

const routes: Routes = [
  {
    path: 'person',
    component: PersonComponent,
    children: [
      // {
      //   path: '', component: PersonComponent
      // },
      {
        path: 'list', component: ListPersonComponent
      },
      {
        path: 'form', component: FormPersonComponent,
        canActivate:[GuardService]
      },
      {
        path: 'detail/:id', component: DetailPersonComponent
      }
    ]
  }
]
@NgModule({
  declarations: [PersonComponent, ListPersonComponent, FormPersonComponent, MenuPersonComponent, ItemPersonComponent, DetailPersonComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    IonicModule.forRoot(),
  ],
  exports: [PersonComponent],
})
export class PersonModule { }
