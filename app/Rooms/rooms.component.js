"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dhafh_service_1 = require("~/Services/dhafh.service");
var segmented_bar_1 = require("ui/segmented-bar");
var router_1 = require("nativescript-angular/router");
var RoomsComponent = /** @class */ (function () {
    function RoomsComponent(dService, routerExtensions) {
        this.dService = dService;
        this.routerExtensions = routerExtensions;
        this.filters = [];
    }
    RoomsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dService.api.getEntries('rooms').then(function (rooms) {
            _this.rooms = rooms;
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
    RoomsComponent.prototype.navigateToRoom = function (args) {
        this.routerExtensions.navigate(['/room-detail', this.rooms[args.index].id]);
    };
    RoomsComponent.prototype.navigateToRegister = function () {
        this.routerExtensions.navigate(['/register']);
    };
    RoomsComponent = __decorate([
        core_1.Component({
            selector: "d-rooms",
            moduleId: module.id,
            templateUrl: "./rooms.component.html",
            styleUrls: ['./rooms.component.scss']
        }),
        __metadata("design:paramtypes", [dhafh_service_1.dhafhService, router_1.RouterExtensions])
    ], RoomsComponent);
    return RoomsComponent;
}());
exports.RoomsComponent = RoomsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9vbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBSWxELDBEQUF3RDtBQUN4RCxrREFBb0Q7QUFFcEQsc0RBQStEO0FBUS9EO0lBSUksd0JBQW9CLFFBQXNCLEVBQVUsZ0JBQWtDO1FBQWxFLGFBQVEsR0FBUixRQUFRLENBQWM7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRnRGLFlBQU8sR0FBNEIsRUFBRSxDQUFDO0lBRW9ELENBQUM7SUFFM0YsaUNBQVEsR0FBUjtRQUFBLGlCQWNDO1FBYkcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBRSxVQUFDLEtBQUs7WUFDOUMsS0FBSSxDQUFDLEtBQUssR0FBWSxLQUFLLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLGFBQWEsR0FBRyxJQUFJLGdDQUFnQixFQUFFLENBQUM7UUFDM0MsYUFBYSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDOUIsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLGdDQUFnQixFQUFFLENBQUM7UUFDOUMsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQztRQUN6QyxJQUFJLGlCQUFpQixHQUFHLElBQUksZ0NBQWdCLEVBQUUsQ0FBQztRQUMvQyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsdUNBQWMsR0FBZCxVQUFlLElBQUk7UUFDZixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVELDJDQUFrQixHQUFsQjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUE1QlEsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDeEMsQ0FBQzt5Q0FLZ0MsNEJBQVksRUFBNEIseUJBQWdCO09BSjdFLGNBQWMsQ0E2QjFCO0lBQUQscUJBQUM7Q0FBQSxBQTdCRCxJQTZCQztBQTdCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5cbmltcG9ydCB7IGlSb29tIH0gZnJvbSBcIn4vU2VydmljZXMvcm9vbVwiO1xuaW1wb3J0IHsgZGhhZmhTZXJ2aWNlIH0gZnJvbSBcIn4vU2VydmljZXMvZGhhZmguc2VydmljZVwiO1xuaW1wb3J0IHsgU2VnbWVudGVkQmFySXRlbSB9IGZyb20gXCJ1aS9zZWdtZW50ZWQtYmFyXCI7XG5pbXBvcnQgeyBGcmFtZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJkLXJvb21zXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Jvb21zLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vcm9vbXMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSb29tc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcm9vbXM6IGlSb29tW107XG4gICAgZmlsdGVyczogQXJyYXk8U2VnbWVudGVkQmFySXRlbT4gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZFNlcnZpY2U6IGRoYWZoU2VydmljZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRTZXJ2aWNlLmFwaS5nZXRFbnRyaWVzKCdyb29tcycpLnRoZW4oIChyb29tcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5yb29tcyA9IDxpUm9vbVtdPnJvb21zO1xuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBzZWdtZW50ZWRGcmVlID0gbmV3IFNlZ21lbnRlZEJhckl0ZW0oKTtcbiAgICAgICAgc2VnbWVudGVkRnJlZS50aXRsZSA9IFwi2YXYrNin2YbYp1wiO1xuICAgICAgICBsZXQgc2VnbWVudGVkVG9wVm90ZSA9IG5ldyBTZWdtZW50ZWRCYXJJdGVtKCk7XG4gICAgICAgIHNlZ21lbnRlZFRvcFZvdGUudGl0bGUgPSBcItin2YTYo9i52YTZiSDYqtmC2YrZhdmL2KdcIjtcbiAgICAgICAgbGV0IHNlZ21lbnRlZExvY2F0aW9uID0gbmV3IFNlZ21lbnRlZEJhckl0ZW0oKTtcbiAgICAgICAgc2VnbWVudGVkTG9jYXRpb24udGl0bGUgPSBcItin2YTYo9mC2LHYqFwiO1xuICAgICAgICB0aGlzLmZpbHRlcnMucHVzaChzZWdtZW50ZWRGcmVlKTtcbiAgICAgICAgdGhpcy5maWx0ZXJzLnB1c2goc2VnbWVudGVkVG9wVm90ZSk7XG4gICAgICAgIHRoaXMuZmlsdGVycy5wdXNoKHNlZ21lbnRlZExvY2F0aW9uKTtcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvUm9vbShhcmdzKXtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL3Jvb20tZGV0YWlsJyx0aGlzLnJvb21zW2FyZ3MuaW5kZXhdLmlkXSk7XG4gICAgfVxuXG4gICAgbmF2aWdhdGVUb1JlZ2lzdGVyKCl7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9yZWdpc3RlciddKTtcbiAgICB9XG59Il19