import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {

jokes = [];

  constructor() {
    this.jokes = [
  {setup:"aaa",
   punchline:"111"
  },
{setup:"bbb",
 punchline: "222"
},
{setup:"ccc",
 punchline: "333"
},
{setup:"ddd",
 punchline: "444"
}
];
   }

  ngOnInit() {
  }

}
