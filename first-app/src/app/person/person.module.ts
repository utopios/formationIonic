import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { FormPersonComponent } from './form-person/form-person.component';
import { MenuPersonComponent } from './menu-person/menu-person.component';
import { ItemPersonComponent } from './item-person/item-person.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PersonComponent, ListPersonComponent, FormPersonComponent, MenuPersonComponent, ItemPersonComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[PersonComponent]
})
export class PersonModule { }
