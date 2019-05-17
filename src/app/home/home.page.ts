import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router:Router){
    this.planejamentos = [];
  }
  planejamentos;
  excluir(nome){
    localStorage.removeItem(nome)
    this.listar();
  }

  listar(){
    this.planejamentos = [];

    const tamanhoDoBanco = localStorage.length

    for (let index = 0; index < tamanhoDoBanco; index++) {
      const chave = localStorage.key(index)
      const planos = localStorage.getItem(chave)
      const planosReal = JSON.parse(planos)
      this.planejamentos.push(planosReal); 
    }
  }
  ionViewDidEnter(){
    this.listar()
  
  }
}
