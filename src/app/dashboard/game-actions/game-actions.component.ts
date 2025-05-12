import { GameService } from './../../shared/services/game.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { take } from 'rxjs';
import { Game } from '../../shared/models';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { imageUrlValidator } from '../../shared/validators/image-url.validator';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-game-actions',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InputTextModule, FloatLabelModule, DialogModule, ButtonModule, ToolbarModule],
  templateUrl: './game-actions.component.html',
  styleUrl: './game-actions.component.scss'
})
export class GameActionsComponent implements OnInit {
  gameForm!: FormGroup;
  showGameDialog = false;

  constructor(private readonly gameService: GameService){}

  ngOnInit(): void {
    this.initGameForm();
  }

  initGameForm(): void {
    this.gameForm = new FormGroup({
      name: new FormControl<string | null>('', [Validators.required]),
      imageUrl: new FormControl<string | null>('', [imageUrlValidator()])
    });
  }

  openGameDialog(): void {
    this.showGameDialog = true;
  }

  closeGameDialog(): void {
    this.showGameDialog = false;
    this.gameForm.reset();
  }

  createGame(): void {
    if (this.gameForm.invalid) {
      return;
    }

    const game = this.gameForm.value as Game;
    this.gameService.add(game).pipe(take(1)).subscribe(() => this.closeGameDialog());
  }
}
