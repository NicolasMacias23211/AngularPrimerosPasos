import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProductosComponent } from './Components/listar-productos/listar-productos.component';
import { CrearProductoComponent } from './Components/crear-producto/crear-producto.component';

const Routes: Routes = [
  {
    path: '', 
    component:ListarProductosComponent
  },
  {
    path: 'crear-producto', 
    component:CrearProductoComponent
  },
  {
    path: 'editar-producto/:id', 
    component:CrearProductoComponent
  },
  {
    path: '**',
    redirectTo:'',pathMatch:'full'
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
