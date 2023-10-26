import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CorrentistaService } from '../correntista.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'poobank-front';

  constructor(
    private router: Router,
    private service: CorrentistaService
  ) { }

  usuario: string = "";
  senha: string = "";

  entrarSistema() {
    alert("Login efetuado para: " + this.usuario);
    this.service.login(this.usuario)
      .subscribe(
        (response) => {
          if (response.id != null) {
            this.service.dadosUsuario = response;
            this.router.navigate(['principal']);
          }
        }
      )
  }
}
