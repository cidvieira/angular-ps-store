import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent implements OnInit {
  @Input()
  gameType:string = "Digital"

  @Input()
  gameConsole:string = "PS4"

  @Input()
  gameCurrency:string = "$"
  
  @Input()
  gamePrice:string = "399,90"

  constructor() { }

  ngOnInit(): void {
  }

}
