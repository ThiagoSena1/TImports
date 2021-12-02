import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play1',
  templateUrl: './play1.component.html',
  styleUrls: ['./play1.component.css']
})
export class Play1Component implements OnInit {
itens:any=[
  {
    pathImage: 'assets/Playstation1/Console.jpg',
   name: ' Playstation 1',
},
{
   pathImage: 'assets/Playstation1/Controle.jpg',
   name: ' Controle Playstation 1',
 },
{
    pathImage: 'assets/Playstation1/Blade.jpg',
   name: ' Blade',
},{
    pathImage: 'assets/Playstation1/Cross.jpg',
   name: ' Cross',
},{
   pathImage: 'assets/Playstation1/Driver.jpg',
   name: ' Driver',
},{
   pathImage: 'assets/Playstation1/Kong.jpg',
   name: ' Kong',
},{
    pathImage: 'assets/Playstation1/MetalGear.jpg',
   name: ' Metal Gear',
},{
    pathImage: 'assets/Playstation1/ResidentEvil2.jpg',
   name: ' Resident Evil 2',
},{
    pathImage: 'assets/Playstation1/Sonic.jpg',
   name: ' Sonic',
},{
    pathImage: 'assets/Playstation1/Twisted.jpg',
   name: ' Twisted Metal 4',
}
]
  constructor() { }

  ngOnInit(): void {
  }

}
