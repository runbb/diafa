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
  shareText
} from "nativescript-social-share";
import {
  MapboxView
} from "nativescript-mapbox";
import { action, alert } from "ui/dialogs";
import { setText } from 'nativescript-clipboard';
import { dial } from 'nativescript-phone';

registerElement("Carousel", () => require("nativescript-carousel").Carousel);
registerElement("CarouselItem", () => require("nativescript-carousel").CarouselItem);

@Component({
  moduleId: module.id,
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.scss']
})
export class RoomDetailComponent implements OnInit {
  public room: iRoom = < iRoom > {};
  disableMap: boolean = true;
  distanceToMakkah: number = 0;
  @ViewChild('mapbox') mapbox: ElementRef;

  constructor(private dService: dhafhService, private route: ActivatedRoute, private ngZone: NgZone) {}

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

          this.distanceToMakkah = parseInt(this.dService.distanceToMakkah(this.room.latitude,this.room.longitude).toFixed(0));
        });
      });
    })
  }

  share() {
    shareText('اعجبني هذا الإعلان\nhttp://206.189.137.251:1337/a/' + this.room['id']);
  }

  connect() {
    action({
      title: 'الإتصال بالعملن',
      actions:[
        'الإتصال بالرقم ' + this.room.phone,
        'نسخ رقم المعلن ' + this.room.phone
      ],
      cancelable: true,
      cancelButtonText: 'الغاء'
    }).then(value => {
      if(value == 'الإتصال بالرقم ' + this.room.phone){
        dial(this.room.phone,true);
      }else if(value == 'نسخ رقم المعلن ' + this.room.phone){
        setText(this.room.phone).then(()=>{
          alert({
            title: 'تم النسخ',
            message: 'تم نسخ الرقم ' + this.room.phone + ' الى المحفظة',
            okButtonText: 'حسنا'
          })
        })
      }
    })
  }
}