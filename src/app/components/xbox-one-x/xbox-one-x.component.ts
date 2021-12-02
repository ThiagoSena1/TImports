import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xbox-one-x',
  templateUrl: './xbox-one-x.component.html',
  styleUrls: ['./xbox-one-x.component.css']
})
export class XboxOneXComponent implements OnInit {
  itens: any = [
    {
      pathImage: 'assets/XboxOne/Console.jpg',
     name: ' Xbox one',
     

},
{
     pathImage: 'assets/XboxOne/Controle.jpg',
     name: ' Controle Xbox One',
     

},
{
      pathImage: 'assets/XboxOne/Battlegrounds.jpg',
     name: ' Battlegrounds',
     

},{
      pathImage: 'assets/XboxOne/F12021.jpg',
     name: ' F1 2021',
     

},{
     pathImage: 'assets/XboxOne/Fallout4.jpg',
     name: ' Fallout 4',
     

},{
     pathImage: 'assets/XboxOne/Gears5.jpg',
     name: ' Gears 5',
     

},{
      pathImage: 'assets/XboxOne/JumpForce.jpg',
     name: ' JumpForce',
     

},{
      pathImage: 'assets/XboxOne/Minecraft.jpg',
     name: ' Minecraft',
     

},{
      pathImage: 'assets/XboxOne/Risk.jpg',
     name: ' Risk',
     

},{
      pathImage: 'assets/XboxOne/SubNautica.jpg',
     name: ' SubNautica',
     

}


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
