import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SistemaComponent } from './sistema.component';
import { SidebarComponent } from 'src/app/layout/Sidebar/Sidebar.component';
import { RouterModule } from '@angular/router';
import { PerfilComponent } from 'src/app/sistema/perfil/perfil.component';
import { GerenciarNotaComponent } from 'src/app/sistema/professor/gerenciar-nota/gerenciar-nota.component';
import { VisualizarAulasDisponiveisComponent } from 'src/app/sistema/professor/visualizar-aulas-disponiveis/visualizar-aulas-disponiveis.component';
import { BoletimEscolarComponent } from "src/app/sistema/aluno/boletim-escolar/boletim-escolar.component";

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VisualizarAulasAlunoComponent } from './aluno/visualizar-aulas-aluno/visualizar-aulas-aluno.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [
    SistemaComponent, 
    SidebarComponent, 
    PerfilComponent, 
    GerenciarNotaComponent, 
    VisualizarAulasDisponiveisComponent, 
    BoletimEscolarComponent,
    VisualizarAulasAlunoComponent
  ],
  exports: [SistemaComponent]
})
export class SistemaModule { }
