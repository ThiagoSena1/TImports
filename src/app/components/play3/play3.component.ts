import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play3',
  templateUrl: './play3.component.html',
  styleUrls: ['./play3.component.css']
})
export class Play3Component implements OnInit {
  itens:any=[
    {
      pathImage: 'assets/Playstation3/Console.jpg',
     name: ' Playstation 3',
     

},
{
     pathImage: 'assets/Playstation3/Controle.jpg',
     name: ' Controle Playstation 3',
     

},
{
      pathImage: 'assets/Playstation3/Batman.jpg',
     name: ' Batman Arkham Origins',
     

},{
      pathImage: 'assets/Playstation3/Battlefield.jpg',
     name: ' Battlefield 3',
     

},{
     pathImage: 'assets/Playstation3/Fifa.jpg',
     name: ' FiFa 19',
     

},{
     pathImage: 'assets/Playstation3/GodOfWarSaga.jpg',
     name: ' God Of War Saga',
     

},{
      pathImage: 'assets/Playstation3/GTA.jpg',
     name: ' GTA 5',
     

},{
      pathImage: 'assets/Playstation3/MortalKombat.jpg',
     name: ' Mortal Kombat',
     

},{
      pathImage: 'assets/Playstation3/RedDead.jpg',
     name: ' Red Dead',
     

},{
      pathImage: 'assets/Playstation3/Uncharted.jpg',
     name: ' Uncharted 3',
     

}


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
