import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordpoolComponent } from './wordpool/wordpool.component';

const routes: Routes = [{ path: 'wordpool', component: WordpoolComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
