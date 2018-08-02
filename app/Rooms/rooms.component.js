"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var dhafh_service_1 = require("~/Services/dhafh.service");
var segmented_bar_1 = require("ui/segmented-bar");
element_registry_1.registerElement("fab", function () { return require("nativescript-floatingactionbutton").Fab; });
var RoomsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function RoomsComponent(dService) {
        this.dService = dService;
        this.filters = [];
    }
    RoomsComponent.prototype.ngOnInit = function () {
        this.items = this.dService.getRooms();
        var segmentedLowPrice = new segmented_bar_1.SegmentedBarItem();
        segmentedLowPrice.title = "الأقل سعرًا";
        var segmentedTopVote = new segmented_bar_1.SegmentedBarItem();
        segmentedTopVote.title = "الأعلى تقيمًا";
        var segmentedLocation = new segmented_bar_1.SegmentedBarItem();
        segmentedLocation.title = "الأقرب";
        this.filters.push(segmentedLowPrice);
        this.filters.push(segmentedTopVote);
        this.filters.push(segmentedLocation);
    };
    RoomsComponent = __decorate([
        core_1.Component({
            selector: "d-rooms",
            moduleId: module.id,
            templateUrl: "./rooms.component.html",
            styleUrls: ['./rooms.component.scss']
        }),
        __metadata("design:paramtypes", [dhafh_service_1.dhafhService])
    ], RoomsComponent);
    return RoomsComponent;
}());
exports.RoomsComponent = RoomsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9vbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBFQUF3RTtBQUd4RSwwREFBd0Q7QUFDeEQsa0RBQW9EO0FBQ3BELGtDQUFlLENBQUMsS0FBSyxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxHQUFHLEVBQWhELENBQWdELENBQUMsQ0FBQztBQVEvRTtJQUdJLDZJQUE2STtJQUM3SSxpSEFBaUg7SUFDakgsd0JBQW9CLFFBQXNCO1FBQXRCLGFBQVEsR0FBUixRQUFRLENBQWM7UUFIMUMsWUFBTyxHQUE0QixFQUFFLENBQUM7SUFHUSxDQUFDO0lBRS9DLGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFdEMsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLGdDQUFnQixFQUFFLENBQUM7UUFDL0MsaUJBQWlCLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztRQUN4QyxJQUFJLGdCQUFnQixHQUFHLElBQUksZ0NBQWdCLEVBQUUsQ0FBQztRQUM5QyxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFDO1FBQ3pDLElBQUksaUJBQWlCLEdBQUcsSUFBSSxnQ0FBZ0IsRUFBRSxDQUFDO1FBQy9DLGlCQUFpQixDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDekMsQ0FBQztJQW5CUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUN4QyxDQUFDO3lDQU1nQyw0QkFBWTtPQUxqQyxjQUFjLENBb0IxQjtJQUFELHFCQUFDO0NBQUEsQUFwQkQsSUFvQkM7QUFwQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xuXG5pbXBvcnQgeyBpUm9vbSB9IGZyb20gXCJ+L1NlcnZpY2VzL3Jvb21cIjtcbmltcG9ydCB7IGRoYWZoU2VydmljZSB9IGZyb20gXCJ+L1NlcnZpY2VzL2RoYWZoLnNlcnZpY2VcIjtcbmltcG9ydCB7IFNlZ21lbnRlZEJhckl0ZW0gfSBmcm9tIFwidWkvc2VnbWVudGVkLWJhclwiO1xucmVnaXN0ZXJFbGVtZW50KFwiZmFiXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZmxvYXRpbmdhY3Rpb25idXR0b25cIikuRmFiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiZC1yb29tc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9yb29tcy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL3Jvb21zLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUm9vbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGl0ZW1zOiBpUm9vbVtdO1xuICAgIGZpbHRlcnM6IEFycmF5PFNlZ21lbnRlZEJhckl0ZW0+ID0gW107XG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEl0ZW1TZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLiBcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkU2VydmljZTogZGhhZmhTZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5kU2VydmljZS5nZXRSb29tcygpO1xuXG4gICAgICAgIGxldCBzZWdtZW50ZWRMb3dQcmljZSA9IG5ldyBTZWdtZW50ZWRCYXJJdGVtKCk7XG4gICAgICAgIHNlZ21lbnRlZExvd1ByaWNlLnRpdGxlID0gXCLYp9mE2KPZgtmEINiz2LnYsdmL2KdcIjtcbiAgICAgICAgbGV0IHNlZ21lbnRlZFRvcFZvdGUgPSBuZXcgU2VnbWVudGVkQmFySXRlbSgpO1xuICAgICAgICBzZWdtZW50ZWRUb3BWb3RlLnRpdGxlID0gXCLYp9mE2KPYudmE2Ykg2KrZgtmK2YXZi9inXCI7XG4gICAgICAgIGxldCBzZWdtZW50ZWRMb2NhdGlvbiA9IG5ldyBTZWdtZW50ZWRCYXJJdGVtKCk7XG4gICAgICAgIHNlZ21lbnRlZExvY2F0aW9uLnRpdGxlID0gXCLYp9mE2KPZgtix2KhcIjtcbiAgICAgICAgdGhpcy5maWx0ZXJzLnB1c2goc2VnbWVudGVkTG93UHJpY2UpO1xuICAgICAgICB0aGlzLmZpbHRlcnMucHVzaChzZWdtZW50ZWRUb3BWb3RlKTtcbiAgICAgICAgdGhpcy5maWx0ZXJzLnB1c2goc2VnbWVudGVkTG9jYXRpb24pO1xuICAgIH1cbn0iXX0=