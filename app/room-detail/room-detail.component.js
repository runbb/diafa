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
element_registry_1.registerElement("Carousel", function () { return require("nativescript-carousel").Carousel; });
element_registry_1.registerElement("CarouselItem", function () { return require("nativescript-carousel").CarouselItem; });
var RoomDetailComponent = /** @class */ (function () {
    function RoomDetailComponent(dService, route, ngZone) {
        this.dService = dService;
        this.route = route;
        this.ngZone = ngZone;
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
        __metadata("design:paramtypes", [dhafh_service_1.dhafhService, router_1.ActivatedRoute, core_1.NgZone])
    ], RoomDetailComponent);
    return RoomDetailComponent;
}());
exports.RoomDetailComponent = RoomDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9vbS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBT3VCO0FBS3ZCLDBFQUUrQztBQUMvQywwREFFa0M7QUFDbEMsMENBRXlCO0FBSXpCLHVFQUVtQztBQUluQyxzQ0FBMkM7QUFDM0MsaUVBQWlEO0FBQ2pELHlEQUEwQztBQUUxQyxrQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFDN0Usa0NBQWUsQ0FBQyxjQUFjLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFlBQVksRUFBN0MsQ0FBNkMsQ0FBQyxDQUFDO0FBUXJGO0lBTUUsNkJBQW9CLFFBQXNCLEVBQVUsS0FBcUIsRUFBVSxNQUFjO1FBQTdFLGFBQVEsR0FBUixRQUFRLENBQWM7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFMMUYsU0FBSSxHQUFvQixFQUFFLENBQUM7UUFDbEMsZUFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixxQkFBZ0IsR0FBVyxDQUFDLENBQUM7SUFHdUUsQ0FBQztJQUVyRyxzQ0FBUSxHQUFSO1FBQUEsaUJBeUJDO1FBeEJDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDaEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO2dCQUMzRCxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztvQkFDZCxLQUFJLENBQUMsSUFBSSxHQUFhLE1BQU0sQ0FBQztvQkFDN0IsSUFB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QThEQztBQTlEWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgTmdab25lLFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q2hpbGQsXG4gIFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENhcm91c2VsLFxuICBDYXJvdXNlbEl0ZW1cbn0gZnJvbSAnbmF0aXZlc2NyaXB0LWNhcm91c2VsJztcbmltcG9ydCB7XG4gIHJlZ2lzdGVyRWxlbWVudFxufSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xuaW1wb3J0IHtcbiAgZGhhZmhTZXJ2aWNlXG59IGZyb20gJ34vU2VydmljZXMvZGhhZmguc2VydmljZSc7XG5pbXBvcnQge1xuICBBY3RpdmF0ZWRSb3V0ZVxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgaVJvb21cbn0gZnJvbSAnfi9TZXJ2aWNlcy9yb29tJztcbmltcG9ydCB7XG4gIHNoYXJlVGV4dFxufSBmcm9tIFwibmF0aXZlc2NyaXB0LXNvY2lhbC1zaGFyZVwiO1xuaW1wb3J0IHtcbiAgTWFwYm94Vmlld1xufSBmcm9tIFwibmF0aXZlc2NyaXB0LW1hcGJveFwiO1xuaW1wb3J0IHsgYWN0aW9uLCBhbGVydCB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBzZXRUZXh0IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNsaXBib2FyZCc7XG5pbXBvcnQgeyBkaWFsIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXBob25lJztcblxucmVnaXN0ZXJFbGVtZW50KFwiQ2Fyb3VzZWxcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jYXJvdXNlbFwiKS5DYXJvdXNlbCk7XG5yZWdpc3RlckVsZW1lbnQoXCJDYXJvdXNlbEl0ZW1cIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jYXJvdXNlbFwiKS5DYXJvdXNlbEl0ZW0pO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtcm9vbS1kZXRhaWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vcm9vbS1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yb29tLWRldGFpbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJvb21EZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgcm9vbTogaVJvb20gPSA8IGlSb29tID4ge307XG4gIGRpc2FibGVNYXA6IGJvb2xlYW4gPSB0cnVlO1xuICBkaXN0YW5jZVRvTWFra2FoOiBudW1iZXIgPSAwO1xuICBAVmlld0NoaWxkKCdtYXBib3gnKSBtYXBib3g6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkU2VydmljZTogZGhhZmhTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgIHRoaXMuZFNlcnZpY2UuYXBpLmdldEVudHJ5KCdyb29tcycsIHBhcmFtc1snaWQnXSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMucm9vbSA9IDwgaVJvb20gPiByZXN1bHQ7XG4gICAgICAgICAgbGV0IG1hcGJveE1hcCA9IDxNYXBib3hWaWV3PnRoaXMubWFwYm94Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgbWFwYm94TWFwLmFkZE1hcmtlcnMoW3tcbiAgICAgICAgICAgICAgbGF0OiB0aGlzLnJvb20ubGF0aXR1ZGUsXG4gICAgICAgICAgICAgIGxuZzogdGhpcy5yb29tLmxvbmdpdHVkZSxcbiAgICAgICAgICAgICAgc3VidGl0bGU6ICfZhdmI2YLYuSDZhdmD2KfZhiDYp9mE2KXYs9iq2LbYp9mB2KknLFxuICAgICAgICAgICAgICBzZWxlY3RlZDogdHJ1ZVxuICAgICAgICAgICAgfV0pO1xuXG4gICAgICAgICAgICBtYXBib3hNYXAuc2V0Q2VudGVyKHtcbiAgICAgICAgICAgICAgbGF0OiB0aGlzLnJvb20ubGF0aXR1ZGUsXG4gICAgICAgICAgICAgIGxuZzogdGhpcy5yb29tLmxvbmdpdHVkZSxcbiAgICAgICAgICAgICAgYW5pbWF0ZWQ6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0sNTAwKTtcblxuICAgICAgICAgIHRoaXMuZGlzdGFuY2VUb01ha2thaCA9IHBhcnNlSW50KHRoaXMuZFNlcnZpY2UuZGlzdGFuY2VUb01ha2thaCh0aGlzLnJvb20ubGF0aXR1ZGUsdGhpcy5yb29tLmxvbmdpdHVkZSkudG9GaXhlZCgwKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSlcbiAgfVxuXG4gIHNoYXJlKCkge1xuICAgIHNoYXJlVGV4dCgn2KfYudis2KjZhtmKINmH2LDYpyDYp9mE2KXYudmE2KfZhlxcbmh0dHA6Ly8yMDYuMTg5LjEzNy4yNTE6MTMzNy9hLycgKyB0aGlzLnJvb21bJ2lkJ10pO1xuICB9XG5cbiAgY29ubmVjdCgpIHtcbiAgICBhY3Rpb24oe1xuICAgICAgdGl0bGU6ICfYp9mE2KXYqti12KfZhCDYqNin2YTYudmF2YTZhicsXG4gICAgICBhY3Rpb25zOltcbiAgICAgICAgJ9in2YTYpdiq2LXYp9mEINio2KfZhNix2YLZhSAnICsgdGhpcy5yb29tLnBob25lLFxuICAgICAgICAn2YbYs9iuINix2YLZhSDYp9mE2YXYudmE2YYgJyArIHRoaXMucm9vbS5waG9uZVxuICAgICAgXSxcbiAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiAn2KfZhNi62KfYoSdcbiAgICB9KS50aGVuKHZhbHVlID0+IHtcbiAgICAgIGlmKHZhbHVlID09ICfYp9mE2KXYqti12KfZhCDYqNin2YTYsdmC2YUgJyArIHRoaXMucm9vbS5waG9uZSl7XG4gICAgICAgIGRpYWwodGhpcy5yb29tLnBob25lLHRydWUpO1xuICAgICAgfWVsc2UgaWYodmFsdWUgPT0gJ9mG2LPYriDYsdmC2YUg2KfZhNmF2LnZhNmGICcgKyB0aGlzLnJvb20ucGhvbmUpe1xuICAgICAgICBzZXRUZXh0KHRoaXMucm9vbS5waG9uZSkudGhlbigoKT0+e1xuICAgICAgICAgIGFsZXJ0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn2KrZhSDYp9mE2YbYs9iuJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICfYqtmFINmG2LPYriDYp9mE2LHZgtmFICcgKyB0aGlzLnJvb20ucGhvbmUgKyAnINin2YTZiSDYp9mE2YXYrdmB2LjYqScsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6ICfYrdiz2YbYpydcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn0iXX0=