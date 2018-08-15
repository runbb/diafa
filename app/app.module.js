"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var element_registry_1 = require("nativescript-angular/element-registry");
var app_routing_1 = require("~/app.routing");
var app_component_1 = require("~/app.component");
// Services
var dhafh_service_1 = require("~/Services/dhafh.service");
// components
var rooms_component_1 = require("~/Rooms/rooms.component");
var room_card_component_1 = require("~/room-card/room-card.component");
var register_component_1 = require("~/register/register.component");
var room_detail_component_1 = require("~/room-detail/room-detail.component");
var add_host_component_1 = require("~/add-host/add-host.component");
// Elements
element_registry_1.registerElement("Mapbox", function () { return require("nativescript-mapbox").MapboxView; });
element_registry_1.registerElement("Ripple", function () { return require("nativescript-ripple").Ripple; });
// import { ItemDetailComponent } from "./item/item-detail.component";
// Uncomment and add to NgModule imports if you need to use two-way binding
var forms_1 = require("nativescript-angular/forms");
var mapbox_component_1 = require("~/mapbox/mapbox.component");
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                app_routing_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                rooms_component_1.RoomsComponent,
                room_card_component_1.RoomCardComponent,
                room_detail_component_1.RoomDetailComponent,
                register_component_1.RegisterComponent,
                mapbox_component_1.MapboxComponent,
                add_host_component_1.AddHostComponent
                // ItemDetailComponent
            ],
            providers: [
                dhafh_service_1.dhafhService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDBFQUF3RTtBQUN4RSw2Q0FBaUQ7QUFDakQsaURBQStDO0FBRS9DLFdBQVc7QUFDWCwwREFBd0Q7QUFFeEQsYUFBYTtBQUNiLDJEQUF5RDtBQUN6RCx1RUFBb0U7QUFDcEUsb0VBQWtFO0FBQ2xFLDZFQUEwRTtBQUMxRSxvRUFBaUU7QUFFakUsV0FBVztBQUNYLGtDQUFlLENBQUMsUUFBUSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQyxVQUFVLEVBQXpDLENBQXlDLENBQUMsQ0FBQztBQUMzRSxrQ0FBZSxDQUFDLFFBQVEsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUMsTUFBTSxFQUFyQyxDQUFxQyxDQUFDLENBQUM7QUFFdkUsc0VBQXNFO0FBRXRFLDJFQUEyRTtBQUMzRSxvREFBcUU7QUFDckUsOERBQTREO0FBRTVELDZFQUE2RTtBQUM3RSxzRUFBc0U7QUErQnRFO0lBSEE7O01BRUU7SUFDRjtJQUF5QixDQUFDO0lBQWIsU0FBUztRQTdCckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiwrQkFBdUI7Z0JBQ3ZCLDhCQUFnQjthQUNuQjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWixnQ0FBYztnQkFDZCx1Q0FBaUI7Z0JBQ2pCLDJDQUFtQjtnQkFDbkIsc0NBQWlCO2dCQUNqQixrQ0FBZTtnQkFDZixxQ0FBZ0I7Z0JBQ2hCLHNCQUFzQjthQUN6QjtZQUNELFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7UUFDRjs7VUFFRTtPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCJ+L2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwifi9hcHAuY29tcG9uZW50XCI7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBkaGFmaFNlcnZpY2UgfSBmcm9tIFwifi9TZXJ2aWNlcy9kaGFmaC5zZXJ2aWNlXCI7XG5cbi8vIGNvbXBvbmVudHNcbmltcG9ydCB7IFJvb21zQ29tcG9uZW50IH0gZnJvbSBcIn4vUm9vbXMvcm9vbXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSb29tQ2FyZENvbXBvbmVudCB9IGZyb20gXCJ+L3Jvb20tY2FyZC9yb29tLWNhcmQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gXCJ+L3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUm9vbURldGFpbENvbXBvbmVudCB9IGZyb20gXCJ+L3Jvb20tZGV0YWlsL3Jvb20tZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQWRkSG9zdENvbXBvbmVudCB9IGZyb20gXCJ+L2FkZC1ob3N0L2FkZC1ob3N0LmNvbXBvbmVudFwiO1xuXG4vLyBFbGVtZW50c1xucmVnaXN0ZXJFbGVtZW50KFwiTWFwYm94XCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtbWFwYm94XCIpLk1hcGJveFZpZXcpO1xucmVnaXN0ZXJFbGVtZW50KFwiUmlwcGxlXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcmlwcGxlXCIpLlJpcHBsZSk7XG5cbi8vIGltcG9ydCB7IEl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBNYXBib3hDb21wb25lbnQgfSBmcm9tIFwifi9tYXBib3gvbWFwYm94LmNvbXBvbmVudFwiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzICBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEhUVFAgd3JhcHBlclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBSb29tc0NvbXBvbmVudCxcbiAgICAgICAgUm9vbUNhcmRDb21wb25lbnQsXG4gICAgICAgIFJvb21EZXRhaWxDb21wb25lbnQsXG4gICAgICAgIFJlZ2lzdGVyQ29tcG9uZW50LFxuICAgICAgICBNYXBib3hDb21wb25lbnQsXG4gICAgICAgIEFkZEhvc3RDb21wb25lbnRcbiAgICAgICAgLy8gSXRlbURldGFpbENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIGRoYWZoU2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==