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
        segmentedTopVote.title = "الأعلى تقيميًا";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9vbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBFQUF3RTtBQUd4RSwwREFBd0Q7QUFDeEQsa0RBQW9EO0FBQ3BELGtDQUFlLENBQUMsS0FBSyxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxHQUFHLEVBQWhELENBQWdELENBQUMsQ0FBQztBQVEvRTtJQUdJLDZJQUE2STtJQUM3SSxpSEFBaUg7SUFDakgsd0JBQW9CLFFBQXNCO1FBQXRCLGFBQVEsR0FBUixRQUFRLENBQWM7UUFIMUMsWUFBTyxHQUE0QixFQUFFLENBQUM7SUFHUSxDQUFDO0lBRS9DLGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFdEMsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLGdDQUFnQixFQUFFLENBQUM7UUFDL0MsaUJBQWlCLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztRQUN4QyxJQUFJLGdCQUFnQixHQUFHLElBQUksZ0NBQWdCLEVBQUUsQ0FBQztRQUM5QyxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUM7UUFDMUMsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLGdDQUFnQixFQUFFLENBQUM7UUFDL0MsaUJBQWlCLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBbkJRLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3hDLENBQUM7eUNBTWdDLDRCQUFZO09BTGpDLGNBQWMsQ0FvQjFCO0lBQUQscUJBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5cbmltcG9ydCB7IGlSb29tIH0gZnJvbSBcIn4vU2VydmljZXMvcm9vbVwiO1xuaW1wb3J0IHsgZGhhZmhTZXJ2aWNlIH0gZnJvbSBcIn4vU2VydmljZXMvZGhhZmguc2VydmljZVwiO1xuaW1wb3J0IHsgU2VnbWVudGVkQmFySXRlbSB9IGZyb20gXCJ1aS9zZWdtZW50ZWQtYmFyXCI7XG5yZWdpc3RlckVsZW1lbnQoXCJmYWJcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1mbG9hdGluZ2FjdGlvbmJ1dHRvblwiKS5GYWIpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJkLXJvb21zXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Jvb21zLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vcm9vbXMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSb29tc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaXRlbXM6IGlSb29tW107XG4gICAgZmlsdGVyczogQXJyYXk8U2VnbWVudGVkQmFySXRlbT4gPSBbXTtcbiAgICAvLyBUaGlzIHBhdHRlcm4gbWFrZXMgdXNlIG9mIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGltcGxlbWVudGF0aW9uIHRvIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgSXRlbVNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuIFxuICAgIC8vIEFuZ3VsYXIga25vd3MgYWJvdXQgdGhpcyBzZXJ2aWNlIGJlY2F1c2UgaXQgaXMgaW5jbHVkZWQgaW4geW91ciBhcHDigJlzIG1haW4gTmdNb2R1bGUsIGRlZmluZWQgaW4gYXBwLm1vZHVsZS50cy5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRTZXJ2aWNlOiBkaGFmaFNlcnZpY2UpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLmRTZXJ2aWNlLmdldFJvb21zKCk7XG5cbiAgICAgICAgbGV0IHNlZ21lbnRlZExvd1ByaWNlID0gbmV3IFNlZ21lbnRlZEJhckl0ZW0oKTtcbiAgICAgICAgc2VnbWVudGVkTG93UHJpY2UudGl0bGUgPSBcItin2YTYo9mC2YQg2LPYudix2YvYp1wiO1xuICAgICAgICBsZXQgc2VnbWVudGVkVG9wVm90ZSA9IG5ldyBTZWdtZW50ZWRCYXJJdGVtKCk7XG4gICAgICAgIHNlZ21lbnRlZFRvcFZvdGUudGl0bGUgPSBcItin2YTYo9i52YTZiSDYqtmC2YrZhdmK2YvYp1wiO1xuICAgICAgICBsZXQgc2VnbWVudGVkTG9jYXRpb24gPSBuZXcgU2VnbWVudGVkQmFySXRlbSgpO1xuICAgICAgICBzZWdtZW50ZWRMb2NhdGlvbi50aXRsZSA9IFwi2KfZhNij2YLYsdioXCI7XG4gICAgICAgIHRoaXMuZmlsdGVycy5wdXNoKHNlZ21lbnRlZExvd1ByaWNlKTtcbiAgICAgICAgdGhpcy5maWx0ZXJzLnB1c2goc2VnbWVudGVkVG9wVm90ZSk7XG4gICAgICAgIHRoaXMuZmlsdGVycy5wdXNoKHNlZ21lbnRlZExvY2F0aW9uKTtcbiAgICB9XG59Il19