import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateSessionGuard } from '@core/guards/validate-session.guard';
import { LoginPageComponent } from '@modules/auth/components/login-page/login-page.component';

const routes: Routes = [
  //nesting routes
 /* { 
    path:'',
    component: HomeComponent,
    children:[
      {
        path:'one',
        component: HomeChildOneComponent
      },
      {
        path:'two',
        component: HomeChildTwoComponent 
      }
    ]
  }*/

//rutas de prueba --ya no existentes
 /* {
    path:'',//TODO: hhtp://localhost:4200/
    component:TestComponentComponent
  },
  {
    path:'test-route',
    component:TestComponentComponent
  },
  {
    path:'**',
    redirectTo:'/test-route'
  }*/

    //lazy routing
    { //TODO: publica
      path:'auth',
      loadChildren: () => import('@modules/auth/auth.module').then((m) => m.AuthModule)
    },
    { //TODO: privada
      path:'task',
      loadChildren: () => import('@modules/task/task.module').then((m) => m.TaskModule),
      canActivate:[ValidateSessionGuard]
    },
    {
      path:'**', //TODO: 
      redirectTo:'/task'
    }


   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
