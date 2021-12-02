import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play2',
  templateUrl: './play2.component.html',
  styleUrls: ['./play2.component.css']
})
export class Play2Component implements OnInit {
  itens:any=[
    {
      pathImage: 'assets/Playstation2/Console.jpg',
     name: ' Playstation 2',
},
{
     pathImage: 'assets/Playstation2/Controle.jpg',
     name: ' Controle Playstation 2',},
{
      pathImage: 'assets/Playstation2/DragonBall.jpg',
     name: ' Dragon Ball',},{
      pathImage: 'assets/Playstation2/GodOfWar1.jpg',
     name: ' God Of War',
     },{
     pathImage: 'assets/Playstation2/GodOfWar2.jpg',
     name: ' God Of War 2',
     

},{
     pathImage: 'assets/Playstation2/GTA.jpg',
     name: ' GTA',
     

},{
      pathImage: 'assets/Playstation2/KingdomHearts.jpg',
     name: ' Kingdom Hearts',
     

},{
      pathImage: 'assets/Playstation2/ResidentEvil.jpg',
     name: ' Resident Evil 4',
     

},{
      pathImage: 'assets/Playstation2/Shadow.jpg',
     name: ' Shadow Colossus',
     

},{
      pathImage: 'assets/Playstation2/Turok.jpg',
     name: ' Turok',
     

}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
