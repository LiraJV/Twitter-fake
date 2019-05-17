import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-novo-planejamento',
  templateUrl: './novo-planejamento.page.html',
  styleUrls: ['./novo-planejamento.page.scss'],
})
export class NovoPlanejamentoPage implements OnInit {
nome;
faturamento;
custo;
  constructor(private nav:NavController) { }

  ngOnInit() {

  }
  planejamento(){
    
  }

  Salvar(form){
    const dadosPlanejamento = JSON.stringify(form.value)

    const nomePlanejamento = form.value.nome
    const faturamentoPlanejamento = form.value.faturamento
    const custoPlanejamento = form.value.custo

    localStorage.setItem(nomePlanejamento, dadosPlanejamento)

    console.log(nomePlanejamento, faturamentoPlanejamento, custoPlanejamento)

    form.reset()

    this.nav.back()
  }
}
