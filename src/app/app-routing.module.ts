import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'confirmacionmensaje',
    loadChildren: () => import('./confirmacionmensaje/confirmacionmensaje.module').then( m => m.ConfirmacionmensajePageModule)
  },
  {
    path: 'lista-mensajes',
    loadChildren: () => import('./lista-mensajes/lista-mensajes.module').then( m => m.ListaMensajesPageModule)
  },
  {
    path: 'contact/:uid',
    loadChildren: () => import('./contact2/contact2.module').then( m => m.Contact2PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
