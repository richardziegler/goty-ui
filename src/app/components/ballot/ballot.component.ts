import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ballot',
  templateUrl: './ballot.component.html',
  styleUrls: ['./ballot.component.css']
})
export class BallotComponent implements OnInit {

  public mockData;

  constructor() { }

  ngOnInit() {
    this.mockData = [
      { title: 'Celeste', url: 'https://www.giantbomb.com/api/image/scale_small/3005645-box_celeste.png'},
      { title: 'God of War', url: 'https://www.giantbomb.com/api/image/scale_small/3012241-god%20of%20war%20%28ps4%29.jpg'},
      { title: 'Into The Breach', url: 'https://www.giantbomb.com/api/image/scale_small/2918639-intothebreach.png'}
    ]
  }

}
