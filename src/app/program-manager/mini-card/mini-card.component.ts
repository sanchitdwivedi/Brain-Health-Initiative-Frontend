import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.css']
})
export class MiniCardComponent implements OnInit {
  @Input() icon: string;
  @Input() title: string;
  @Input() value: string;
  @Input() color: string;
  @Input() isIncrease: boolean;
  @Input() isCurrency: boolean;
  @Input() duration: string;
  @Input() percentValue: number;
  @Input() change: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
