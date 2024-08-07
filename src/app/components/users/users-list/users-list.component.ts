import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioService } from 'src/app/core/usuario.service';
import { UsuarioResumidoModelresponse } from 'src/app/models/response/usuarioResumidoModelResponse.model';
import { AlertaComponentComponent } from 'src/app/shared/components/alerta-component/alerta-component.component';
import { Alerta } from 'src/app/shared/models/alerta';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  clientes: UsuarioResumidoModelresponse[] = [];

  constructor(private usuarioService: UsuarioService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.usuarioService.listar().subscribe(
      (usuarios: UsuarioResumidoModelresponse[]) => {
        console.log('Usuários recebidos:', usuarios);
        this.clientes = usuarios;
      },
      (error) => {
        console.error('Erro ao listar usuários:', error);
      }
    );
  }

  inativarCliente(id: number): void{
    this.usuarioService.deletar(id).subscribe(
      (reponse) => {
        const config = {
          data: {
            titulo: 'Sucesso!',
            descricao: 'Usuário inativado com sucesso!',
            btnSucesso: 'Ok',
            corBtnSucesso: 'primary',
            possuirBtnFechar: false
        } as Alerta
      };
      const dialogRef = this.dialog.open(AlertaComponentComponent, config);
      this.listar()
  },
  (error) => {
    const config = {
      data: {
        titulo: 'Erro!',
        descricao: 'Não conseguimos inativar o cliente Tente novamente mais tarde.',
        btnSucesso: 'Fechar',
        corBtnSucesso: 'warn',
        possuirBtnFechar: false
      } as Alerta
    };
  });

  }

}
