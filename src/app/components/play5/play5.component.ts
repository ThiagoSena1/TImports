import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play5',
  templateUrl: './play5.component.html',
  styleUrls: ['./play5.component.css']
})
export class Play5Component implements OnInit {

  itens: any = [
    {
      pathImage: 'assets/Playstation5/Console.jpg',
     name: ' Playstation 5',
},
{
     pathImage: 'assets/Playstation5/Controle.jpg',
     name: ' Controle Playstation 5',
},
{
      pathImage: 'assets/Playstation5/Avengers.jpg',
     name: ' Avengers',
},{
      pathImage: 'assets/Playstation5/CallOfDuty.jpg',
     name: ' Call Of Duty Black Ops Cold War',
},{
     pathImage: 'assets/Playstation5/DemonsSouls.jpg',
     name: ' Demon´s Souls',
},{
     pathImage: 'assets/Playstation5/Fortnite.jpg',
     name: ' Fortnite',
},{
      pathImage: 'assets/Playstation5/MortalKombat.jpg',
     name: ' Mortal Kombat 11',
},{
      pathImage: 'assets/Playstation5/NBA.jpg',
     name: ' NBA 2K21',
},{
      pathImage: 'assets/Playstation5/SpiderMan.jpg',
     name: ' Spider-Man',
},{
      pathImage: 'assets/Playstation5/WatchDogs.jpg',
     name: ' Watch Dogs',
}

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
