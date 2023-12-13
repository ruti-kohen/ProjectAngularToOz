import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatesComponent } from './components/candidates/candidates.component';


const routes: Routes = [  
{path:'candidate',component:CandidatesComponent}

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
   ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
