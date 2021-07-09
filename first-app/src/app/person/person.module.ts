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

const routes:Routes = [
  {path:'', component: ListPersonComponent},
  {path :'form', component: FormPersonComponent}
] 

@NgModule({
  declarations: [PersonComponent, ListPersonComponent, FormPersonComponent, MenuPersonComponent, ItemPersonComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    IonicModule.forRoot()
  ],
  exports:[PersonComponent]
})
export class PersonModule { }
