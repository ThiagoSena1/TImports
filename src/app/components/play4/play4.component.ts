import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play4',
  templateUrl: './play4.component.html',
  styleUrls: ['./play4.component.css']
})
export class Play4Component implements OnInit {
  itens: any = [
    {
      pathImage: 'assets/Playstation4/Console.jpg',
      name: ' Playstation 4',
    },
    {
      pathImage: 'assets/Playstation4/Controle.jpg',
      name: ' Controle Playstation 4',
    },
    {
      pathImage: 'assets/Playstation4/Battleborn.jpg',
      name: ' Battleborn',
    }, {
      pathImage: 'assets/Playstation4/CyberPunk.jpg',
      name: ' CyberPunk',
    }, {
      pathImage: 'assets/Playstation4/GhostOfTsushima.jpg',
      name: ' Ghost Of Tsushima',
 }, {
      pathImage: 'assets/Playstation4/Lego.jpg',
      name: ' Lego',
    }, {
      pathImage: 'assets/Playstation4/Mafia.jpg',
      name: ' MAFIA III',
}, {
      pathImage: 'assets/Playstation4/OverWatch.jpg',
      name: ' Overwatch',
    }, {
      pathImage: 'assets/Playstation4/TheLast.jpg',
      name: ' The Last Of Us Part 2',
    }, {
      pathImage: 'assets/Playstation4/TheWitcher.jpg',
      name: ' The Witcher',
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
