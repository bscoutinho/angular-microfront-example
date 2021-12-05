
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OrderComponent } from './order.component';

const routes = [{ component: OrderComponent, path: '' }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [OrderComponent],
})
export class OrderModule {}
