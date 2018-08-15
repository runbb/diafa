"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dhafh_service_1 = require("~/Services/dhafh.service");
var router_1 = require("@angular/router");
var page_1 = require("tns-core-modules/ui/page/page");
var MapboxComponent = /** @class */ (function () {
    function MapboxComponent(dService, route, ngZone, _page) {
        this.dService = dService;
        this.route = route;
        this.ngZone = ngZone;
        this._page = _page;
        this.room = {};
        this.disableMap = false;
        _page.actionBarHidden = true;
    }
    MapboxComponent.prototype.ngOnInit = function () {
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
                });
            });
        });
    };
    __decorate([
        core_1.ViewChild('mapbox'),
        __metadata("design:type", core_1.ElementRef)
    ], MapboxComponent.prototype, "mapbox", void 0);
    MapboxComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-mapbox',
            templateUrl: './mapbox.component.html',
            styleUrls: ['./mapbox.component.scss']
        }),
        __metadata("design:paramtypes", [dhafh_service_1.dhafhService, router_1.ActivatedRoute, core_1.NgZone, page_1.Page])
    ], MapboxComponent);
    return MapboxComponent;
}());
exports.MapboxComponent = MapboxComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcGJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FPdUI7QUFRdkIsMERBRWtDO0FBQ2xDLDBDQUV5QjtBQU96QixzREFBcUQ7QUFRckQ7SUFNRSx5QkFBb0IsUUFBc0IsRUFBVSxLQUFxQixFQUFVLE1BQWMsRUFBVSxLQUFXO1FBQWxHLGFBQVEsR0FBUixRQUFRLENBQWM7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBSi9HLFNBQUksR0FBb0IsRUFBRSxDQUFDO1FBQ2xDLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFJMUIsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFBQSxpQkF1QkM7UUF0QkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNoQyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07Z0JBQzNELEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO29CQUNkLEtBQUksQ0FBQyxJQUFJLEdBQWEsTUFBTSxDQUFDO29CQUM3QixJQUFJLFNBQVMsR0FBZSxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztvQkFDdEQsVUFBVSxDQUFDO3dCQUNULFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQ0FDcEIsR0FBRyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtnQ0FDdkIsR0FBRyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztnQ0FDeEIsUUFBUSxFQUFFLHFCQUFxQjtnQ0FDL0IsUUFBUSxFQUFFLElBQUk7NkJBQ2YsQ0FBQyxDQUFDLENBQUM7d0JBRUosU0FBUyxDQUFDLFNBQVMsQ0FBQzs0QkFDbEIsR0FBRyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTs0QkFDdkIsR0FBRyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUzs0QkFDeEIsUUFBUSxFQUFFLEtBQUs7eUJBQ2hCLENBQUMsQ0FBQTtvQkFDSixDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ1QsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQTdCb0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQVMsaUJBQVU7bURBQUM7SUFKN0IsZUFBZTtRQU4zQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDdkMsQ0FBQzt5Q0FPOEIsNEJBQVksRUFBaUIsdUJBQWMsRUFBa0IsYUFBTSxFQUFpQixXQUFJO09BTjNHLGVBQWUsQ0FrQzNCO0lBQUQsc0JBQUM7Q0FBQSxBQWxDRCxJQWtDQztBQWxDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBOZ1pvbmUsXG4gIEVsZW1lbnRSZWYsXG4gIFZpZXdDaGlsZCxcbiAgXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2Fyb3VzZWwsXG4gIENhcm91c2VsSXRlbVxufSBmcm9tICduYXRpdmVzY3JpcHQtY2Fyb3VzZWwnO1xuaW1wb3J0IHtcbiAgcmVnaXN0ZXJFbGVtZW50XG59IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5pbXBvcnQge1xuICBkaGFmaFNlcnZpY2Vcbn0gZnJvbSAnfi9TZXJ2aWNlcy9kaGFmaC5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIEFjdGl2YXRlZFJvdXRlXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBpUm9vbVxufSBmcm9tICd+L1NlcnZpY2VzL3Jvb20nO1xuaW1wb3J0IHtcbiAgTWFwYm94Vmlld1xufSBmcm9tIFwibmF0aXZlc2NyaXB0LW1hcGJveFwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLW1hcGJveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXBib3guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYXBib3guY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYXBib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyByb29tOiBpUm9vbSA9IDwgaVJvb20gPiB7fTtcbiAgZGlzYWJsZU1hcDogYm9vbGVhbiA9IGZhbHNlO1xuICBAVmlld0NoaWxkKCdtYXBib3gnKSBtYXBib3g6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkU2VydmljZTogZGhhZmhTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSBfcGFnZTogUGFnZSkge1xuICAgIF9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgIHRoaXMuZFNlcnZpY2UuYXBpLmdldEVudHJ5KCdyb29tcycsIHBhcmFtc1snaWQnXSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMucm9vbSA9IDwgaVJvb20gPiByZXN1bHQ7XG4gICAgICAgICAgbGV0IG1hcGJveE1hcCA9IDxNYXBib3hWaWV3PnRoaXMubWFwYm94Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgbWFwYm94TWFwLmFkZE1hcmtlcnMoW3tcbiAgICAgICAgICAgICAgbGF0OiB0aGlzLnJvb20ubGF0aXR1ZGUsXG4gICAgICAgICAgICAgIGxuZzogdGhpcy5yb29tLmxvbmdpdHVkZSxcbiAgICAgICAgICAgICAgc3VidGl0bGU6ICfZhdmI2YLYuSDZhdmD2KfZhiDYp9mE2KXYs9iq2LbYp9mB2KknLFxuICAgICAgICAgICAgICBzZWxlY3RlZDogdHJ1ZVxuICAgICAgICAgICAgfV0pO1xuXG4gICAgICAgICAgICBtYXBib3hNYXAuc2V0Q2VudGVyKHtcbiAgICAgICAgICAgICAgbGF0OiB0aGlzLnJvb20ubGF0aXR1ZGUsXG4gICAgICAgICAgICAgIGxuZzogdGhpcy5yb29tLmxvbmdpdHVkZSxcbiAgICAgICAgICAgICAgYW5pbWF0ZWQ6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0sNTAwKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KVxuICB9XG59Il19