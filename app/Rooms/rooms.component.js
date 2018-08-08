"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dhafh_service_1 = require("~/Services/dhafh.service");
var segmented_bar_1 = require("ui/segmented-bar");
var RoomsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function RoomsComponent(dService) {
        this.dService = dService;
        this.filters = [];
    }
    RoomsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dService.api.getEntries('rooms').then(function (rooms) {
            _this.items = rooms;
        });
        var segmentedFree = new segmented_bar_1.SegmentedBarItem();
        segmentedFree.title = "مجانا";
        var segmentedTopVote = new segmented_bar_1.SegmentedBarItem();
        segmentedTopVote.title = "الأعلى تقيمًا";
        var segmentedLocation = new segmented_bar_1.SegmentedBarItem();
        segmentedLocation.title = "الأقرب";
        this.filters.push(segmentedFree);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9vbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBSWxELDBEQUF3RDtBQUN4RCxrREFBb0Q7QUFRcEQ7SUFHSSw2SUFBNkk7SUFDN0ksaUhBQWlIO0lBQ2pILHdCQUFvQixRQUFzQjtRQUF0QixhQUFRLEdBQVIsUUFBUSxDQUFjO1FBSDFDLFlBQU8sR0FBNEIsRUFBRSxDQUFDO0lBR1EsQ0FBQztJQUUvQyxpQ0FBUSxHQUFSO1FBQUEsaUJBY0M7UUFiRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFFLFVBQUMsS0FBSztZQUM5QyxLQUFJLENBQUMsS0FBSyxHQUFZLEtBQUssQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksYUFBYSxHQUFHLElBQUksZ0NBQWdCLEVBQUUsQ0FBQztRQUMzQyxhQUFhLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUM5QixJQUFJLGdCQUFnQixHQUFHLElBQUksZ0NBQWdCLEVBQUUsQ0FBQztRQUM5QyxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFDO1FBQ3pDLElBQUksaUJBQWlCLEdBQUcsSUFBSSxnQ0FBZ0IsRUFBRSxDQUFDO1FBQy9DLGlCQUFpQixDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFyQlEsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDeEMsQ0FBQzt5Q0FNZ0MsNEJBQVk7T0FMakMsY0FBYyxDQXNCMUI7SUFBRCxxQkFBQztDQUFBLEFBdEJELElBc0JDO0FBdEJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcblxuaW1wb3J0IHsgaVJvb20gfSBmcm9tIFwifi9TZXJ2aWNlcy9yb29tXCI7XG5pbXBvcnQgeyBkaGFmaFNlcnZpY2UgfSBmcm9tIFwifi9TZXJ2aWNlcy9kaGFmaC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTZWdtZW50ZWRCYXJJdGVtIH0gZnJvbSBcInVpL3NlZ21lbnRlZC1iYXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiZC1yb29tc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9yb29tcy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL3Jvb21zLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUm9vbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGl0ZW1zOiBpUm9vbVtdO1xuICAgIGZpbHRlcnM6IEFycmF5PFNlZ21lbnRlZEJhckl0ZW0+ID0gW107XG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEl0ZW1TZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLiBcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkU2VydmljZTogZGhhZmhTZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRTZXJ2aWNlLmFwaS5nZXRFbnRyaWVzKCdyb29tcycpLnRoZW4oIChyb29tcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5pdGVtcyA9IDxpUm9vbVtdPnJvb21zO1xuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBzZWdtZW50ZWRGcmVlID0gbmV3IFNlZ21lbnRlZEJhckl0ZW0oKTtcbiAgICAgICAgc2VnbWVudGVkRnJlZS50aXRsZSA9IFwi2YXYrNin2YbYp1wiO1xuICAgICAgICBsZXQgc2VnbWVudGVkVG9wVm90ZSA9IG5ldyBTZWdtZW50ZWRCYXJJdGVtKCk7XG4gICAgICAgIHNlZ21lbnRlZFRvcFZvdGUudGl0bGUgPSBcItin2YTYo9i52YTZiSDYqtmC2YrZhdmL2KdcIjtcbiAgICAgICAgbGV0IHNlZ21lbnRlZExvY2F0aW9uID0gbmV3IFNlZ21lbnRlZEJhckl0ZW0oKTtcbiAgICAgICAgc2VnbWVudGVkTG9jYXRpb24udGl0bGUgPSBcItin2YTYo9mC2LHYqFwiO1xuICAgICAgICB0aGlzLmZpbHRlcnMucHVzaChzZWdtZW50ZWRGcmVlKTtcbiAgICAgICAgdGhpcy5maWx0ZXJzLnB1c2goc2VnbWVudGVkVG9wVm90ZSk7XG4gICAgICAgIHRoaXMuZmlsdGVycy5wdXNoKHNlZ21lbnRlZExvY2F0aW9uKTtcbiAgICB9XG59Il19