import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  setup: string;
  punchline: string;

  constructor() { 

    this.setup = 'why green is not red?';
    this.punchline = 'because its red';
  }

  ngOnInit() {
  }

}
