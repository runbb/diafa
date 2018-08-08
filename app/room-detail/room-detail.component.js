"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_social_share_1 = require("nativescript-social-share");
var dhafh_service_1 = require("~/Services/dhafh.service");
var router_1 = require("@angular/router");
element_registry_1.registerElement("Carousel", function () { return require("nativescript-carousel").Carousel; });
element_registry_1.registerElement("CarouselItem", function () { return require("nativescript-carousel").CarouselItem; });
var RoomDetailComponent = /** @class */ (function () {
    function RoomDetailComponent(dService, route, ngZone) {
        this.dService = dService;
        this.route = route;
        this.ngZone = ngZone;
        this.room = {};
        this.disableMap = true;
    }
    RoomDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.dService.api.getEntry('rooms', params['id']).then(function (result) {
                _this.ngZone.run(function () {
                    _this.room = result;
                });
            });
        });
    };
    RoomDetailComponent.prototype.share = function () {
        nativescript_social_share_1.shareText('اعجبني هذا الإعلان\nhttp://206.189.137.251:1337/a/' + this.room['id']);
    };
    RoomDetailComponent.prototype.onMapReady = function ($event) {
        var room = this.room;
        $event.map.addMarkers([
            {
                lat: room.latitude,
                lng: room.longitude,
                subtitle: 'موقع مكان الإستضافة',
                selected: true
            }
        ]);
    };
    RoomDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-room-detail',
            templateUrl: './room-detail.component.html',
            styleUrls: ['./room-detail.component.scss']
        }),
        __metadata("design:paramtypes", [dhafh_service_1.dhafhService, router_1.ActivatedRoute, core_1.NgZone])
    ], RoomDetailComponent);
    return RoomDetailComponent;
}());
exports.RoomDetailComponent = RoomDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9vbS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBS3VCO0FBS3ZCLDBFQUUrQztBQUMvQyx1RUFBc0Q7QUFDdEQsMERBQXdEO0FBQ3hELDBDQUFpRDtBQUlqRCxrQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFDN0Usa0NBQWUsQ0FBQyxjQUFjLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFlBQVksRUFBN0MsQ0FBNkMsQ0FBQyxDQUFDO0FBUXJGO0lBSUUsNkJBQW9CLFFBQXNCLEVBQVUsS0FBcUIsRUFBVSxNQUFjO1FBQTdFLGFBQVEsR0FBUixRQUFRLENBQWM7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFIMUYsU0FBSSxHQUFpQixFQUFFLENBQUM7UUFDL0IsZUFBVSxHQUFZLElBQUksQ0FBQztJQUV5RSxDQUFDO0lBRXJHLHNDQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDaEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO2dCQUMxRCxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztvQkFDZCxLQUFJLENBQUMsSUFBSSxHQUFVLE1BQU0sQ0FBQztnQkFDNUIsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELG1DQUFLLEdBQUw7UUFDRSxxQ0FBUyxDQUFDLG9EQUFvRCxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRUQsd0NBQVUsR0FBVixVQUFXLE1BQU07UUFDZixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO1lBQ3BCO2dCQUNFLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDbEIsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTO2dCQUNuQixRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUUsSUFBSTthQUNmO1NBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQTlCVSxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7U0FDNUMsQ0FBQzt5Q0FLOEIsNEJBQVksRUFBaUIsdUJBQWMsRUFBa0IsYUFBTTtPQUp0RixtQkFBbUIsQ0ErQi9CO0lBQUQsMEJBQUM7Q0FBQSxBQS9CRCxJQStCQztBQS9CWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgTmdab25lLFxuICBcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDYXJvdXNlbCxcbiAgQ2Fyb3VzZWxJdGVtXG59IGZyb20gJ25hdGl2ZXNjcmlwdC1jYXJvdXNlbCc7XG5pbXBvcnQge1xuICByZWdpc3RlckVsZW1lbnRcbn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbmltcG9ydCB7IHNoYXJlVGV4dCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc29jaWFsLXNoYXJlXCI7XG5pbXBvcnQgeyBkaGFmaFNlcnZpY2UgfSBmcm9tICd+L1NlcnZpY2VzL2RoYWZoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm9vbXNDb21wb25lbnQgfSBmcm9tICd+L1Jvb21zL3Jvb21zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBpUm9vbSB9IGZyb20gJ34vU2VydmljZXMvcm9vbSc7XG5cbnJlZ2lzdGVyRWxlbWVudChcIkNhcm91c2VsXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2Fyb3VzZWxcIikuQ2Fyb3VzZWwpO1xucmVnaXN0ZXJFbGVtZW50KFwiQ2Fyb3VzZWxJdGVtXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2Fyb3VzZWxcIikuQ2Fyb3VzZWxJdGVtKTtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLXJvb20tZGV0YWlsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jvb20tZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcm9vbS1kZXRhaWwuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSb29tRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIHJvb206IGlSb29tID0gPGlSb29tPnt9O1xuICBkaXNhYmxlTWFwOiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRTZXJ2aWNlOiBkaGFmaFNlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgdGhpcy5kU2VydmljZS5hcGkuZ2V0RW50cnkoJ3Jvb21zJyxwYXJhbXNbJ2lkJ10pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpPT57XG4gICAgICAgICAgdGhpcy5yb29tID0gPGlSb29tPnJlc3VsdDtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KVxuICB9XG5cbiAgc2hhcmUoKXtcbiAgICBzaGFyZVRleHQoJ9in2LnYrNio2YbZiiDZh9iw2Kcg2KfZhNil2LnZhNin2YZcXG5odHRwOi8vMjA2LjE4OS4xMzcuMjUxOjEzMzcvYS8nK3RoaXMucm9vbVsnaWQnXSk7XG4gIH1cblxuICBvbk1hcFJlYWR5KCRldmVudCkge1xuICAgIGxldCByb29tID0gdGhpcy5yb29tO1xuICAgICRldmVudC5tYXAuYWRkTWFya2VycyhbXG4gICAgICB7XG4gICAgICAgIGxhdDogcm9vbS5sYXRpdHVkZSxcbiAgICAgICAgbG5nOiByb29tLmxvbmdpdHVkZSxcbiAgICAgICAgc3VidGl0bGU6ICfZhdmI2YLYuSDZhdmD2KfZhiDYp9mE2KXYs9iq2LbYp9mB2KknLFxuICAgICAgICBzZWxlY3RlZDogdHJ1ZVxuICAgICAgfV1cbiAgICApO1xuICB9XG59Il19