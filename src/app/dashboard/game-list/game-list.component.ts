import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { GameService } from '../../shared/services/game.service';
import { Observable } from 'rxjs';
import { Game } from '../../shared/models';

@Component({
  selector: 'app-game-list',
  imports: [CommonModule, CardModule],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss'
})
export class GameListComponent implements OnInit {

  games$!: Observable<Game[]>;

  constructor(private readonly gameService: GameService){}

  ngOnInit(): void {
    this.games$ = this.gameService.getAll();
  }

}
