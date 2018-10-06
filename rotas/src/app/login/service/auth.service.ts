import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../../model/usuario.model';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private usuarios: Usuario[] = new Array;
  private usuarioAdmin: Usuario = new Usuario(); 
  private usuario: Usuario = new Usuario();
  showMenuEmitter = new EventEmitter<boolean>();
  usuarioAutenticado: boolean = false;
  usuarioSessao: Usuario; 

  constructor(private router: Router) {
    this.usuarioAdmin.nome = 'bruno@hotmail.com';
    this.usuarioAdmin.senha = '1234';
    this.usuarioAdmin.perfil = 1;
    this.usuario.nome = 'taci@hotmail.com';
    this.usuario.senha = '12345';
    this.usuario.perfil = 2;
    this.usuarios.push(this.usuarioAdmin, this.usuario);    
   }
  logout(){
    this.usuarioAutenticado = false;
    this.showMenuEmitter.emit(this.usuarioAutenticado);
  }
  logar(usuario: Usuario){
    this.usuarioAutenticado = false;
    for (let i = 0; i < this.usuarios.length; i++) {
      if(this.usuarios[i].nome == usuario.nome && this.usuarios[i].senha == usuario.senha){
        this.usuarioAutenticado = true;
        this.usuarioSessao = this.usuarios[i];
        this.showMenuEmitter.emit(this.usuarioAutenticado);
        this.router.navigate(['/home']);
        break;
      }else{
        this.usuarioSessao = null;
        this.showMenuEmitter.emit(this.usuarioAutenticado);
        this.router.navigate(['/login']);
      }   
    }
  }
  isUsuarioAutenticado(): boolean{
    return this.usuarioAutenticado;
  }

}
