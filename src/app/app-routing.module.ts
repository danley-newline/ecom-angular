import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';

const routes : Routes = [
      {
        path:'cart',
        component: CartComponent
      },
      {
        path:'home',
        component: HomeComponent
      },
      {
        path:'not-found',
        component: NotFoundComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path:'**',
        redirectTo: '/not-found'
      }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule]
  })

  export class AppRoutingModule{}