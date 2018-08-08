import {
  Component,
  OnInit,
  NgZone,
  
} from '@angular/core';
import {
  Carousel,
  CarouselItem
} from 'nativescript-carousel';
import {
  registerElement
} from "nativescript-angular/element-registry";
import { shareText } from "nativescript-social-share";
import { dhafhService } from '~/Services/dhafh.service';
import { ActivatedRoute } from '@angular/router';
import { RoomsComponent } from '~/Rooms/rooms.component';
import { iRoom } from '~/Services/room';

registerElement("Carousel", () => require("nativescript-carousel").Carousel);
registerElement("CarouselItem", () => require("nativescript-carousel").CarouselItem);

@Component({
  moduleId: module.id,
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.scss']
})
export class RoomDetailComponent implements OnInit {
  public room: iRoom = <iRoom>{};
  disableMap: boolean = true;

  constructor(private dService: dhafhService, private route: ActivatedRoute, private ngZone: NgZone) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dService.api.getEntry('rooms',params['id']).then(result => {
        this.ngZone.run(()=>{
          this.room = <iRoom>result;
        });
      });
    })
  }

  share(){
    shareText('اعجبني هذا الإعلان\nhttp://206.189.137.251:1337/a/'+this.room['id']);
  }

  onMapReady($event) {
    let room = this.room;
    $event.map.addMarkers([
      {
        lat: room.latitude,
        lng: room.longitude,
        subtitle: 'موقع مكان الإستضافة',
        selected: true
      }]
    );
  }
}