import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { TofaRoutingModule, routedComponents } from './tofa-routing.module';
import { WeekComponent } from '../../pages/week/week.component';
import { TofaDataComponent } from '../../pages/tofa-data/tofa-data.component';

@NgModule({
  imports: [
    ThemeModule,
    TofaRoutingModule,
  ],
  declarations: [
    routedComponents,
    WeekComponent,
    TofaDataComponent,
  ],
  exports: [
    WeekComponent,
    TofaDataComponent,
  ],

})
export class TofaModule { }
