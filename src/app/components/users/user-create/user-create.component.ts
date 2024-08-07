import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioService } from 'src/app/core/usuario.service';
import { UsuarioModelRequest } from 'src/app/models/dto/usuarioModelRequest.dto';
import { AlertaComponentComponent } from 'src/app/shared/components/alerta-component/alerta-component.component';
import { Alerta } from 'src/app/shared/models/alerta';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder,private usuarioService: UsuarioService,private dialog: MatDialog){}



  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      telefone: ['', [Validators.required, Validators.maxLength(9), Validators.minLength(9)]],
      cep: ['', [Validators.required,Validators.maxLength(8), Validators.minLength(8)]],
      numeroCasa: ['',Validators.required],
      ddd: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(2)]]
    });
  }

  eCampoInvalido(campo: string): boolean {
    const control = this.form.get(campo);
    return control?.invalid && (control?.dirty || control?.touched) || false;
  }


  onSubmit() {
    if (this.form.valid) {
      const formularioPreenchido = this.form.value;
      const usuario: UsuarioModelRequest = {
        nome: formularioPreenchido.nome,
        cep: formularioPreenchido.cep,
        numero: formularioPreenchido.numeroCasa,
        telefones: [{
          ddd: formularioPreenchido.ddd,
          numero: formularioPreenchido.telefone,
          titular: formularioPreenchido.nome,
          tipoTelefone: 'PRINCIPAL'
        }]
      }
      console.log(usuario);

      this.usuarioService.salvar(usuario).subscribe(
        (response) => {
          const config = {
            data: {
              titulo: 'Sucesso!',
              descricao: 'Usuário cadastrado com sucesso!',
              btnSucesso: 'Ok',
              corBtnSucesso: 'primary',
              possuirBtnFechar: false
            }as Alerta
          };
          const dialogRef = this.dialog.open(AlertaComponentComponent, config);
          dialogRef.afterClosed().subscribe(() => {
          this.form.reset();
        });
        },
        (error) => {
          const config = {
            data: {
              titulo: 'Erro!',
              descricao: 'Não conseguimos salvar seu registro. Tente novamente mais tarde.',
              btnSucesso: 'Fechar',
              corBtnSucesso: 'warn',
              possuirBtnFechar: false
            } as Alerta
          };
          this.dialog.open(AlertaComponentComponent, config);
        }
      );
    } else {
      this.form.markAllAsTouched();
    }
  }



}
