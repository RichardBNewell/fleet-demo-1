import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-stat-center',
  templateUrl: './card-stat-center.component.html',
  styleUrls: ['./card-stat-center.component.scss']
})

export class CardStatCenterComponent {
    @Input() item: object;
}
