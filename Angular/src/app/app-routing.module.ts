import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './Auth/auth/register/register.component';
import { ItemComponent } from './Inventory/Items/Items/Item.component';


const routes: Routes = [{ path:"Auth", loadChildren: () => import('./Auth/auth/auth.module').then(m => m.AuthModule) },
 
{path:"register",component:RegisterComponent},
 { path:"",component:ItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
