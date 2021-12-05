import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LocationsComponent } from './locations.component';

const routes = [{ component: LocationsComponent, path: '' }];

@NgModule({
  declarations: [LocationsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LocationsModule {}
