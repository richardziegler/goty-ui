import { Component, OnInit } from '@angular/core';
import { GameService } from '../../game.service';
import { Game } from '../../game';

@Component({
  selector: 'app-ballot',
  templateUrl: './ballot.component.html',
  styleUrls: ['./ballot.component.css']
})
export class BallotComponent implements OnInit {

  public mockData;
  games: Game[];

  constructor(
    private gameService: GameService,

  ) { }

  ngOnInit() {
  this.getGames();

    this.mockData = [
      { title: 'Celeste', url: 'https://www.giantbomb.com/api/image/scale_small/3005645-box_celeste.png'},
      { title: 'God of War', url: 'https://www.giantbomb.com/api/image/scale_small/3012241-god%20of%20war%20%28ps4%29.jpg'},
      { title: 'Into The Breach', url: 'https://www.giantbomb.com/api/image/scale_small/2918639-intothebreach.png'}
    ];
  }

  getGames(): void {
    this.gameService.getGames()
    .subscribe(games => this.games = games);
    console.log(this.games);
  }

}
