import { Routes } from '@angular/router';
import { WhoAreWe1PageComponent } from './pages/who-are-we1-page/who-are-we1-page.component';
import { WhoAreWe2PageComponent } from './pages/who-are-we2-page/who-are-we2-page.component';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent
  },
  {
    path: 'who-are-we1',
    component: WhoAreWe1PageComponent
  },
  {
    path: 'who-are-we2',
    component: WhoAreWe2PageComponent
  }
];
