import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TofaComponent } from './tofa.component';
import { TofaPersonaldataComponent } from './tofa-personaldata/tofa-personaldata.component';

const routes: Routes = [{
  path: '',
  component: TofaComponent,
  children: [{
    path: 'tofa-personaldata',
    component: TofaPersonaldataComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TofaRoutingModule { }

export const routedComponents = [
TofaComponent,
TofaPersonaldataComponent,
];
