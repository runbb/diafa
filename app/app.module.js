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
// Elements
element_registry_1.registerElement("Mapbox", function () { return require("nativescript-mapbox").MapboxView; });
// import { ItemDetailComponent } from "./item/item-detail.component";
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
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
                app_routing_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                rooms_component_1.RoomsComponent,
                room_card_component_1.RoomCardComponent,
                register_component_1.RegisterComponent,
                room_detail_component_1.RoomDetailComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDBFQUF3RTtBQUN4RSw2Q0FBaUQ7QUFDakQsaURBQStDO0FBRS9DLFdBQVc7QUFDWCwwREFBd0Q7QUFFeEQsYUFBYTtBQUNiLDJEQUF5RDtBQUN6RCx1RUFBb0U7QUFDcEUsb0VBQWtFO0FBQ2xFLDZFQUEwRTtBQUUxRSxXQUFXO0FBQ1gsa0NBQWUsQ0FBQyxRQUFRLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFVBQVUsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO0FBRTNFLHNFQUFzRTtBQUV0RSwyRUFBMkU7QUFDM0Usd0VBQXdFO0FBRXhFLDZFQUE2RTtBQUM3RSxzRUFBc0U7QUE0QnRFO0lBSEE7O01BRUU7SUFDRjtJQUF5QixDQUFDO0lBQWIsU0FBUztRQTFCckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiw4QkFBZ0I7YUFDbkI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osZ0NBQWM7Z0JBQ2QsdUNBQWlCO2dCQUNqQixzQ0FBaUI7Z0JBQ2pCLDJDQUFtQjtnQkFDbkIsc0JBQXNCO2FBQ3pCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztRQUNGOztVQUVFO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIn4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCJ+L2FwcC5jb21wb25lbnRcIjtcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IGRoYWZoU2VydmljZSB9IGZyb20gXCJ+L1NlcnZpY2VzL2RoYWZoLnNlcnZpY2VcIjtcblxuLy8gY29tcG9uZW50c1xuaW1wb3J0IHsgUm9vbXNDb21wb25lbnQgfSBmcm9tIFwifi9Sb29tcy9yb29tcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJvb21DYXJkQ29tcG9uZW50IH0gZnJvbSBcIn4vcm9vbS1jYXJkL3Jvb20tY2FyZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSBcIn4vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSb29tRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIn4vcm9vbS1kZXRhaWwvcm9vbS1kZXRhaWwuY29tcG9uZW50XCI7XG5cbi8vIEVsZW1lbnRzXG5yZWdpc3RlckVsZW1lbnQoXCJNYXBib3hcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1tYXBib3hcIikuTWFwYm94Vmlldyk7XG5cbi8vIGltcG9ydCB7IEl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSFRUUCB3cmFwcGVyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgUm9vbXNDb21wb25lbnQsXG4gICAgICAgIFJvb21DYXJkQ29tcG9uZW50LFxuICAgICAgICBSZWdpc3RlckNvbXBvbmVudCxcbiAgICAgICAgUm9vbURldGFpbENvbXBvbmVudFxuICAgICAgICAvLyBJdGVtRGV0YWlsQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgZGhhZmhTZXJ2aWNlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19