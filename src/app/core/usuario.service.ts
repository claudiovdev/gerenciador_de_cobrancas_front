import { UsuarioModelResponse } from './../models/response/usuarioModelResponse.model';
import { UsuarioModelRequest } from './../models/dto/usuarioModelRequest.dto';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioResumidoModelresponse } from '../models/response/usuarioResumidoModelResponse.model';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = 'http://localhost:8080/usuarios';

  constructor(private http: HttpClient) { }

  salvar(usuario: UsuarioModelRequest): Observable<UsuarioModelResponse>{
    return this.http.post<UsuarioModelResponse>(`${this.url}/cadastrar`, usuario);
  }

  listar(): Observable<UsuarioResumidoModelresponse[]>{
     var teste = this.http.get<UsuarioResumidoModelresponse[]>(this.url);
     console.log(teste);
     return teste;
  }

  deletar(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`);
  }

}
