import {
  Component,
  OnInit,
  NgZone,
  ElementRef,
  ViewChild,
  
} from '@angular/core';
import {
  Carousel,
  CarouselItem
} from 'nativescript-carousel';
import {
  registerElement
} from "nativescript-angular/element-registry";
import {
  dhafhService
} from '~/Services/dhafh.service';
import {
  ActivatedRoute
} from '@angular/router';
import {
  iRoom
} from '~/Services/room';
import {
  MapboxView
} from "nativescript-mapbox";
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  moduleId: module.id,
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss']
})
export class MapboxComponent implements OnInit {

  public room: iRoom = < iRoom > {};
  disableMap: boolean = false;
  @ViewChild('mapbox') mapbox: ElementRef;

  constructor(private dService: dhafhService, private route: ActivatedRoute, private ngZone: NgZone, private _page: Page) {
    _page.actionBarHidden = true;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dService.api.getEntry('rooms', params['id']).then(result => {
        this.ngZone.run(() => {
          this.room = < iRoom > result;
          let mapboxMap = <MapboxView>this.mapbox.nativeElement;
          setTimeout(()=>{
            mapboxMap.addMarkers([{
              lat: this.room.latitude,
              lng: this.room.longitude,
              subtitle: 'موقع مكان الإستضافة',
              selected: true
            }]);

            mapboxMap.setCenter({
              lat: this.room.latitude,
              lng: this.room.longitude,
              animated: false
            })
          },500);
        });
      });
    })
  }
}