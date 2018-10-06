import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../model/usuario.model';
import { AuthService } from '../login/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout(){


    
    this.authService.usuarioAutenticado = false;
    this.authService.logout();
    this.router.navigate(['/login']);
    //this.router.navigate(['']);
  }

}
