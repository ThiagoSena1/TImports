import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xbox-series-s',
  templateUrl: './xbox-series-s.component.html',
  styleUrls: ['./xbox-series-s.component.css']
})
export class XboxSeriesSComponent implements OnInit {
  itens: any = [
    {
      pathImage: 'assets/XboxSeriesS/Console.jpg',
     name: ' Xbox Series S',
     

},
{
     pathImage: 'assets/XboxSeriesS/Controle.jpg',
     name: ' Controle Xbox Series X',
     

},
{
      pathImage: 'assets/XboxSeriesS/AlexKidd.jpg',
     name: ' Alex Kidd',
     

},{
      pathImage: 'assets/XboxSeriesS/Dirt.jpg',
     name: ' Dirt 5',
     

},{
     pathImage: 'assets/XboxSeriesS/DragonBallXenoverse.jpg',
     name: ' Dragon Ball Xenoverse',
     

},{
     pathImage: 'assets/XboxSeriesS/NarutoStorm.jpg',
     name: ' Naruto Storm 2',
     

},{
      pathImage: 'assets/XboxSeriesS/NierReplicant.jpg',
     name: ' Nier Replicant',
     

},{
      pathImage: 'assets/XboxSeriesS/RocketLeague.jpg',
     name: ' Rocket League',
     

},{
      pathImage: 'assets/XboxSeriesS/SuperCross.jpg',
     name: ' Super Cross',
     

},{
      pathImage: 'assets/XboxSeriesS/TheCrew.jpg',
     name: ' The Crew',
     

}


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
