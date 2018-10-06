import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from "./guards/auth-guard";
import { CursoGuard } from "./guards/cursos.guard";
import { AlunosGuard } from "./guards/alunos.guard";
import { PaginaNaoEncontradaComponent } from "./pagina-nao-encontrada/pagina-nao-encontrada.component";

const APP_ROUTES: Routes = [
    { path: 'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule', 
                      canActivate: [AuthGuard], 
                      canActivateChild:[CursoGuard], 
                      canLoad: [AuthGuard] 
    },
    { path: 'alunos', loadChildren: 'app/aluno/alunos.module#AlunosModule', 
                      canActivate: [AuthGuard], 
                      canActivateChild:[AlunosGuard],
                      canLoad: [AuthGuard] 
    },        
    { path: 'home', component: HomeComponent, 
                      canActivate: [AuthGuard],  
                      canLoad: [AuthGuard]  
    },
    { 
        path: 'login', component: LoginComponent
    },
    { 
        path: '', component: LoginComponent
    },
    { path: '**', component: PaginaNaoEncontradaComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(APP_ROUTES, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {

   
}