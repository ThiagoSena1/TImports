import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xbox360',
  templateUrl: './xbox360.component.html',
  styleUrls: ['./xbox360.component.css']
})
export class Xbox360Component implements OnInit {
  itens: any = [
    {
      pathImage: 'assets/Xbox360/Console.jpg',
     name: ' Xbox 360',
     

},
{
     pathImage: 'assets/Xbox360/Controle.png',
     name: ' Controle Xbox 360',
     

},
{
      pathImage: 'assets/Xbox360/FifaStreet.jpg',
     name: ' Fifa Street',
     

},{
      pathImage: 'assets/Xbox360/Frontlines.jpg',
     name: ' Frontlines',
     

},{
     pathImage: 'assets/Xbox360/GearsOfWar.jpg',
     name: ' Gears Of War',
     

},{
     pathImage: 'assets/Xbox360/GTA5.jpg',
     name: ' GTA 5',
     

},{
      pathImage: 'assets/Xbox360/HarryPotter.jpg',
     name: ' Harry Potter',
     

},{
      pathImage: 'assets/Xbox360/NeedForSpeed.jpg',
     name: ' Need For Speed',
     

},{
      pathImage: 'assets/Xbox360/Skate3.jpg',
     name: ' Skate 3',
     

},{
      pathImage: 'assets/Xbox360/SouthPark.jpg',
     name: ' South Park',
     

}


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
