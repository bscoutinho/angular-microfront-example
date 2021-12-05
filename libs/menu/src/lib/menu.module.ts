
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu.component';

const routes = [{ component: MenuComponent, path: '' }];

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MenuModule {}
