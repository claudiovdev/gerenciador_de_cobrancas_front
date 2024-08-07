import { Component, Inject, OnInit } from '@angular/core';
import { Alerta } from '../../models/alerta';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alerta-component',
  templateUrl: './alerta-component.component.html',
  styleUrls: ['./alerta-component.component.css']
})
export class AlertaComponentComponent implements OnInit{


  alerta = {
    titulo: 'Sucesso!',
    descricao: "Seus registro foi cadastrado com sucesso!!!",
    btnSucesso: 'Ok',
    btnCancelar: 'Cancelar',
    corBtnSucesso: 'accent',
    corBtnCancelar: 'warn',
    possuirBtnFechar: false
  } as Alerta;

  constructor(public dialogRef: MatDialogRef<AlertaComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  ngOnInit() {
    if(this.data){
      this.alerta.titulo = this.data.titulo || this.alerta.titulo;
      this.alerta.descricao = this.data.descricao || this.alerta.descricao;
      this.alerta.btnSucesso = this.data.btnSucesso || this.alerta.btnSucesso;
      this.alerta.btnCancelar = this.data.btnCancelar || this.alerta.btnCancelar;
      this.alerta.corBtnSucesso = this.data.corBtnSucesso || this.alerta.corBtnSucesso;
      this.alerta.corBtnCancelar = this.data.corBtnCancelar || this.alerta.corBtnCancelar;
      this.alerta.possuirBtnFechar = this.data.possuirBtnFechar || this.alerta.possuirBtnFechar;
    }
  }
}
