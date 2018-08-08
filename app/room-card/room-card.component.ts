import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.scss']
})
export class RoomCardComponent implements OnInit {
  @Input('room') room = {};
  constructor() { }

  ngOnInit() {
    // this.room['photo']['url'] = 'http://206.189.137.251:1337' + this.room['photo']['url'];
  }
}
