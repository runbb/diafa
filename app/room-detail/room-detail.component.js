"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var dhafh_service_1 = require("~/Services/dhafh.service");
var router_1 = require("@angular/router");
var nativescript_social_share_1 = require("nativescript-social-share");
var dialogs_1 = require("ui/dialogs");
var nativescript_clipboard_1 = require("nativescript-clipboard");
var nativescript_phone_1 = require("nativescript-phone");
var router_2 = require("nativescript-angular/router");
element_registry_1.registerElement("Carousel", function () { return require("nativescript-carousel").Carousel; });
element_registry_1.registerElement("CarouselItem", function () { return require("nativescript-carousel").CarouselItem; });
var RoomDetailComponent = /** @class */ (function () {
    function RoomDetailComponent(dService, route, ngZone, routerExtensions) {
        this.dService = dService;
        this.route = route;
        this.ngZone = ngZone;
        this.routerExtensions = routerExtensions;
        this.room = {};
        this.disableMap = true;
        this.distanceToMakkah = 0;
    }
    RoomDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.dService.api.getEntry('rooms', params['id']).then(function (result) {
                _this.ngZone.run(function () {
                    _this.room = result;
                    var mapboxMap = _this.mapbox.nativeElement;
                    setTimeout(function () {
                        mapboxMap.addMarkers([{
                                lat: _this.room.latitude,
                                lng: _this.room.longitude,
                                subtitle: 'موقع مكان الإستضافة',
                                selected: true
                            }]);
                        mapboxMap.setCenter({
                            lat: _this.room.latitude,
                            lng: _this.room.longitude,
                            animated: false
                        });
                    }, 500);
                    _this.distanceToMakkah = parseInt(_this.dService.distanceToMakkah(_this.room.latitude, _this.room.longitude).toFixed(0));
                });
            });
        });
    };
    RoomDetailComponent.prototype.share = function () {
        nativescript_social_share_1.shareText('اعجبني هذا الإعلان\nhttp://206.189.137.251:1337/a/' + this.room['id']);
    };
    RoomDetailComponent.prototype.connect = function () {
        var _this = this;
        dialogs_1.action({
            title: 'الإتصال بالعملن',
            actions: [
                'الإتصال بالرقم ' + this.room.phone,
                'نسخ رقم المعلن ' + this.room.phone
            ],
            cancelable: true,
            cancelButtonText: 'الغاء'
        }).then(function (value) {
            if (value == 'الإتصال بالرقم ' + _this.room.phone) {
                nativescript_phone_1.dial(_this.room.phone, true);
            }
            else if (value == 'نسخ رقم المعلن ' + _this.room.phone) {
                nativescript_clipboard_1.setText(_this.room.phone).then(function () {
                    dialogs_1.alert({
                        title: 'تم النسخ',
                        message: 'تم نسخ الرقم ' + _this.room.phone + ' الى المحفظة',
                        okButtonText: 'حسنا'
                    });
                });
            }
        });
    };
    RoomDetailComponent.prototype.openMap = function (args) {
        this.routerExtensions.navigate(['/mapbox', this.room.id]);
    };
    __decorate([
        core_1.ViewChild('mapbox'),
        __metadata("design:type", core_1.ElementRef)
    ], RoomDetailComponent.prototype, "mapbox", void 0);
    RoomDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-room-detail',
            templateUrl: './room-detail.component.html',
            styleUrls: ['./room-detail.component.scss']
        }),
        __metadata("design:paramtypes", [dhafh_service_1.dhafhService, router_1.ActivatedRoute, core_1.NgZone, router_2.RouterExtensions])
    ], RoomDetailComponent);
    return RoomDetailComponent;
}());
exports.RoomDetailComponent = RoomDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9vbS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBT3VCO0FBS3ZCLDBFQUUrQztBQUMvQywwREFFa0M7QUFDbEMsMENBRXlCO0FBSXpCLHVFQUVtQztBQUluQyxzQ0FBMkM7QUFDM0MsaUVBQWlEO0FBQ2pELHlEQUEwQztBQUMxQyxzREFBK0Q7QUFFL0Qsa0NBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO0FBQzdFLGtDQUFlLENBQUMsY0FBYyxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxZQUFZLEVBQTdDLENBQTZDLENBQUMsQ0FBQztBQVFyRjtJQU1FLDZCQUFvQixRQUFzQixFQUFVLEtBQXFCLEVBQVUsTUFBYyxFQUFVLGdCQUFrQztRQUF6SCxhQUFRLEdBQVIsUUFBUSxDQUFjO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUx0SSxTQUFJLEdBQW9CLEVBQUUsQ0FBQztRQUNsQyxlQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLHFCQUFnQixHQUFXLENBQUMsQ0FBQztJQUdtSCxDQUFDO0lBRWpKLHNDQUFRLEdBQVI7UUFBQSxpQkF5QkM7UUF4QkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNoQyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07Z0JBQzNELEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO29CQUNkLEtBQUksQ0FBQyxJQUFJLEdBQWEsTUFBTSxDQUFDO29CQUM3QixJQUFJLFNBQVMsR0FBZSxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztvQkFDdEQsVUFBVSxDQUFDO3dCQUNULFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQ0FDcEIsR0FBRyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtnQ0FDdkIsR0FBRyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztnQ0FDeEIsUUFBUSxFQUFFLHFCQUFxQjtnQ0FDL0IsUUFBUSxFQUFFLElBQUk7NkJBQ2YsQ0FBQyxDQUFDLENBQUM7d0JBRUosU0FBUyxDQUFDLFNBQVMsQ0FBQzs0QkFDbEIsR0FBRyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTs0QkFDdkIsR0FBRyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUzs0QkFDeEIsUUFBUSxFQUFFLEtBQUs7eUJBQ2hCLENBQUMsQ0FBQTtvQkFDSixDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUM7b0JBRVAsS0FBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RILENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxtQ0FBSyxHQUFMO1FBQ0UscUNBQVMsQ0FBQyxvREFBb0QsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVELHFDQUFPLEdBQVA7UUFBQSxpQkFzQkM7UUFyQkMsZ0JBQU0sQ0FBQztZQUNMLEtBQUssRUFBRSxpQkFBaUI7WUFDeEIsT0FBTyxFQUFDO2dCQUNOLGlCQUFpQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztnQkFDbkMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO2FBQ3BDO1lBQ0QsVUFBVSxFQUFFLElBQUk7WUFDaEIsZ0JBQWdCLEVBQUUsT0FBTztTQUMxQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsS0FBSztZQUNYLEVBQUUsQ0FBQSxDQUFDLEtBQUssSUFBSSxpQkFBaUIsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUM7Z0JBQy9DLHlCQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0IsQ0FBQztZQUFBLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxLQUFLLElBQUksaUJBQWlCLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDO2dCQUNyRCxnQ0FBTyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUM1QixlQUFLLENBQUM7d0JBQ0osS0FBSyxFQUFFLFVBQVU7d0JBQ2pCLE9BQU8sRUFBRSxlQUFlLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsY0FBYzt3QkFDM0QsWUFBWSxFQUFFLE1BQU07cUJBQ3JCLENBQUMsQ0FBQTtnQkFDSixDQUFDLENBQUMsQ0FBQTtZQUNKLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFHRCxxQ0FBTyxHQUFQLFVBQVEsSUFBSTtRQUNWLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUE5RG9CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFTLGlCQUFVO3VEQUFDO0lBSjdCLG1CQUFtQjtRQU4vQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztTQUM1QyxDQUFDO3lDQU84Qiw0QkFBWSxFQUFpQix1QkFBYyxFQUFrQixhQUFNLEVBQTRCLHlCQUFnQjtPQU5sSSxtQkFBbUIsQ0FtRS9CO0lBQUQsMEJBQUM7Q0FBQSxBQW5FRCxJQW1FQztBQW5FWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgTmdab25lLFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q2hpbGQsXG4gIFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENhcm91c2VsLFxuICBDYXJvdXNlbEl0ZW1cbn0gZnJvbSAnbmF0aXZlc2NyaXB0LWNhcm91c2VsJztcbmltcG9ydCB7XG4gIHJlZ2lzdGVyRWxlbWVudFxufSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xuaW1wb3J0IHtcbiAgZGhhZmhTZXJ2aWNlXG59IGZyb20gJ34vU2VydmljZXMvZGhhZmguc2VydmljZSc7XG5pbXBvcnQge1xuICBBY3RpdmF0ZWRSb3V0ZVxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgaVJvb21cbn0gZnJvbSAnfi9TZXJ2aWNlcy9yb29tJztcbmltcG9ydCB7XG4gIHNoYXJlVGV4dFxufSBmcm9tIFwibmF0aXZlc2NyaXB0LXNvY2lhbC1zaGFyZVwiO1xuaW1wb3J0IHtcbiAgTWFwYm94Vmlld1xufSBmcm9tIFwibmF0aXZlc2NyaXB0LW1hcGJveFwiO1xuaW1wb3J0IHsgYWN0aW9uLCBhbGVydCB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBzZXRUZXh0IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNsaXBib2FyZCc7XG5pbXBvcnQgeyBkaWFsIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXBob25lJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5yZWdpc3RlckVsZW1lbnQoXCJDYXJvdXNlbFwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNhcm91c2VsXCIpLkNhcm91c2VsKTtcbnJlZ2lzdGVyRWxlbWVudChcIkNhcm91c2VsSXRlbVwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNhcm91c2VsXCIpLkNhcm91c2VsSXRlbSk7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1yb29tLWRldGFpbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9yb29tLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Jvb20tZGV0YWlsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUm9vbURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyByb29tOiBpUm9vbSA9IDwgaVJvb20gPiB7fTtcbiAgZGlzYWJsZU1hcDogYm9vbGVhbiA9IHRydWU7XG4gIGRpc3RhbmNlVG9NYWtrYWg6IG51bWJlciA9IDA7XG4gIEBWaWV3Q2hpbGQoJ21hcGJveCcpIG1hcGJveDogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRTZXJ2aWNlOiBkaGFmaFNlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIG5nWm9uZTogTmdab25lLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICB0aGlzLmRTZXJ2aWNlLmFwaS5nZXRFbnRyeSgncm9vbXMnLCBwYXJhbXNbJ2lkJ10pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJvb20gPSA8IGlSb29tID4gcmVzdWx0O1xuICAgICAgICAgIGxldCBtYXBib3hNYXAgPSA8TWFwYm94Vmlldz50aGlzLm1hcGJveC5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgIG1hcGJveE1hcC5hZGRNYXJrZXJzKFt7XG4gICAgICAgICAgICAgIGxhdDogdGhpcy5yb29tLmxhdGl0dWRlLFxuICAgICAgICAgICAgICBsbmc6IHRoaXMucm9vbS5sb25naXR1ZGUsXG4gICAgICAgICAgICAgIHN1YnRpdGxlOiAn2YXZiNmC2Lkg2YXZg9in2YYg2KfZhNil2LPYqti22KfZgdipJyxcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHRydWVcbiAgICAgICAgICAgIH1dKTtcblxuICAgICAgICAgICAgbWFwYm94TWFwLnNldENlbnRlcih7XG4gICAgICAgICAgICAgIGxhdDogdGhpcy5yb29tLmxhdGl0dWRlLFxuICAgICAgICAgICAgICBsbmc6IHRoaXMucm9vbS5sb25naXR1ZGUsXG4gICAgICAgICAgICAgIGFuaW1hdGVkOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9LDUwMCk7XG5cbiAgICAgICAgICB0aGlzLmRpc3RhbmNlVG9NYWtrYWggPSBwYXJzZUludCh0aGlzLmRTZXJ2aWNlLmRpc3RhbmNlVG9NYWtrYWgodGhpcy5yb29tLmxhdGl0dWRlLHRoaXMucm9vbS5sb25naXR1ZGUpLnRvRml4ZWQoMCkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pXG4gIH1cblxuICBzaGFyZSgpIHtcbiAgICBzaGFyZVRleHQoJ9in2LnYrNio2YbZiiDZh9iw2Kcg2KfZhNil2LnZhNin2YZcXG5odHRwOi8vMjA2LjE4OS4xMzcuMjUxOjEzMzcvYS8nICsgdGhpcy5yb29tWydpZCddKTtcbiAgfVxuXG4gIGNvbm5lY3QoKSB7XG4gICAgYWN0aW9uKHtcbiAgICAgIHRpdGxlOiAn2KfZhNil2KrYtdin2YQg2KjYp9mE2LnZhdmE2YYnLFxuICAgICAgYWN0aW9uczpbXG4gICAgICAgICfYp9mE2KXYqti12KfZhCDYqNin2YTYsdmC2YUgJyArIHRoaXMucm9vbS5waG9uZSxcbiAgICAgICAgJ9mG2LPYriDYsdmC2YUg2KfZhNmF2LnZhNmGICcgKyB0aGlzLnJvb20ucGhvbmVcbiAgICAgIF0sXG4gICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ9in2YTYutin2KEnXG4gICAgfSkudGhlbih2YWx1ZSA9PiB7XG4gICAgICBpZih2YWx1ZSA9PSAn2KfZhNil2KrYtdin2YQg2KjYp9mE2LHZgtmFICcgKyB0aGlzLnJvb20ucGhvbmUpe1xuICAgICAgICBkaWFsKHRoaXMucm9vbS5waG9uZSx0cnVlKTtcbiAgICAgIH1lbHNlIGlmKHZhbHVlID09ICfZhtiz2K4g2LHZgtmFINin2YTZhdi52YTZhiAnICsgdGhpcy5yb29tLnBob25lKXtcbiAgICAgICAgc2V0VGV4dCh0aGlzLnJvb20ucGhvbmUpLnRoZW4oKCk9PntcbiAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogJ9iq2YUg2KfZhNmG2LPYricsXG4gICAgICAgICAgICBtZXNzYWdlOiAn2KrZhSDZhtiz2K4g2KfZhNix2YLZhSAnICsgdGhpcy5yb29tLnBob25lICsgJyDYp9mE2Ykg2KfZhNmF2K3Zgdi42KknLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAn2K3Ys9mG2KcnXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cblxuICBvcGVuTWFwKGFyZ3Mpe1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9tYXBib3gnLHRoaXMucm9vbS5pZF0pO1xuICB9XG59Il19