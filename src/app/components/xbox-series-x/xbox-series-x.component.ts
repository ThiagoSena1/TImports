import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xbox-series-x',
  templateUrl: './xbox-series-x.component.html',
  styleUrls: ['./xbox-series-x.component.css']
})
export class XboxSeriesXComponent implements OnInit {
  itens: any = [
    {
      pathImage: 'assets/XboxSeriesX/Console.jpeg',
     name: ' Xbox Series X',
},
{
     pathImage: 'assets/XboxSeriesX/Controle.jpg',
     name: ' Controle Xbox Series X',
},
{
      pathImage: 'assets/XboxSeriesX/AssassinsCreed.jpg',
     name: ' Assassins Creed Origins',
},{
      pathImage: 'assets/XboxSeriesX/BackBlood.jpg',
     name: ' Back Blood',
},{
     pathImage: 'assets/XboxSeriesX/FarCry6.jpg',
     name: ' FarCry 6',
},{
     pathImage: 'assets/XboxSeriesX/Hades.jpg',
     name: ' Hades',
},{
      pathImage: 'assets/XboxSeriesX/ImmortalsFenyx.jpg',
     name: ' Immortals Fenyx',
},{
      pathImage: 'assets/XboxSeriesX/ItTakes.jpg',
     name: ' It Takes',
},{
      pathImage: 'assets/XboxSeriesX/ReCore.jpg',
     name: ' Recore',
},{
      pathImage: 'assets/XboxSeriesX/RidersRepublic.jpg',
     name: ' Riders Republic',
}
 ]
  constructor() { }

  ngOnInit(): void {
  }

}
