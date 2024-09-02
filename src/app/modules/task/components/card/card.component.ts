import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() idOrder: string | number = 0
  @Input() items: Array<any>=[]
  constructor() { }

  ngOnInit(): void {
  }

}