import { Input, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphicAttributeComponent } from './graphic-attribute/graphic-attribute.component';
import { BoardDetailComponent } from './board-detail/board-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'informacion-elemento', pathMatch: 'full' },
  { path: 'informacion-elemento', component: BoardDetailComponent },
  { path: 'analisis-grafico', component: GraphicAttributeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  

  
}
