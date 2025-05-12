import { Component } from '@angular/core';
import { GameListComponent } from './game-list/game-list.component';
import { GameActionsComponent } from './game-actions/game-actions.component';

@Component({
  selector: 'app-dashboard',
  imports: [GameListComponent, GameActionsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
