import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acessorios',
  templateUrl: './acessorios.component.html',
  styleUrls: ['./acessorios.component.css']
})
export class AcessoriosComponent implements OnInit {

  itens:any=[
{name: 'Suporte Para Controle E Fone De Video Game Ps5,ps4,xbox One Almak'},
{name: 'Suporte de Suporte Para Videogame de Clipe de Telefone Para Controle'},
{name: 'Caneca Controle 3d Vídeo Game Over Gamer Playstation Geek!!!'},
{name: 'Suporte Para Video Game Xbox Ps3 Ps4 Acessorios Duplo Bonito Bedin Sat'},
{name: 'Controle para nintendo switch, gatilho para volante de corrida'},
{name: 'Super Almofada Formato Controle'},
{name: 'Porta Jogos, Caixa, Case P/ Jogos De Vídeo Game - Ps4 Preta Wood'},
{name: 'Suporte/ Gamer Porta Controle video Game, Ps3, Ps4, Ps5 E Xbox One'},
{name: 'Puff Formato Controle Xbox One Geek Video Game Ps5 Puff Monkey'},
{name: 'Carteira Slim - Video Game Qualidade Acessórios'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
