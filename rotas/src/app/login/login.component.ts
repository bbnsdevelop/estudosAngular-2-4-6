import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Usuario } from '../model/usuario.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  showForms: boolean = true;
  showBemVindo: boolean = false
  private usuario: Usuario = new Usuario();
  
  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    if(this.authService.usuarioAutenticado == false){
      this.showForms = true;
    }
    if(this.route.snapshot.url.length == 0 && this.authService.usuarioAutenticado == true){
        this.usuario = this.authService.usuarioSessao;
        this.showForms = false;
        this.showBemVindo = true;
      }
    
  }

  login(){
    this.authService.logar(this.usuario);
    this.authService.showMenuEmitter.subscribe(res => this.showBemVindo = res);    
  }
  logout(){
    this.usuario = new Usuario();
    this.showForms = true;
    this.showBemVindo = false;
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
