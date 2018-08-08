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
// import { ItemDetailComponent } from "./item/item-detail.component";
// Uncomment and add to NgModule imports if you need to use two-way binding
var forms_1 = require("nativescript-angular/forms");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDBFQUF3RTtBQUN4RSw2Q0FBaUQ7QUFDakQsaURBQStDO0FBRS9DLFdBQVc7QUFDWCwwREFBd0Q7QUFFeEQsYUFBYTtBQUNiLDJEQUF5RDtBQUN6RCx1RUFBb0U7QUFDcEUsb0VBQWtFO0FBQ2xFLDZFQUEwRTtBQUMxRSxvRUFBaUU7QUFFakUsV0FBVztBQUNYLGtDQUFlLENBQUMsUUFBUSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQyxVQUFVLEVBQXpDLENBQXlDLENBQUMsQ0FBQztBQUUzRSxzRUFBc0U7QUFFdEUsMkVBQTJFO0FBQzNFLG9EQUFxRTtBQUVyRSw2RUFBNkU7QUFDN0Usc0VBQXNFO0FBOEJ0RTtJQUhBOztNQUVFO0lBQ0Y7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUE1QnJCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsK0JBQXVCO2dCQUN2Qiw4QkFBZ0I7YUFDbkI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osZ0NBQWM7Z0JBQ2QsdUNBQWlCO2dCQUNqQiwyQ0FBbUI7Z0JBQ25CLHNDQUFpQjtnQkFDakIscUNBQWdCO2dCQUNoQixzQkFBc0I7YUFDekI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO1FBQ0Y7O1VBRUU7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwifi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIn4vYXBwLmNvbXBvbmVudFwiO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgZGhhZmhTZXJ2aWNlIH0gZnJvbSBcIn4vU2VydmljZXMvZGhhZmguc2VydmljZVwiO1xuXG4vLyBjb21wb25lbnRzXG5pbXBvcnQgeyBSb29tc0NvbXBvbmVudCB9IGZyb20gXCJ+L1Jvb21zL3Jvb21zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUm9vbUNhcmRDb21wb25lbnQgfSBmcm9tIFwifi9yb29tLWNhcmQvcm9vbS1jYXJkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tIFwifi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJvb21EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwifi9yb29tLWRldGFpbC9yb29tLWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFkZEhvc3RDb21wb25lbnQgfSBmcm9tIFwifi9hZGQtaG9zdC9hZGQtaG9zdC5jb21wb25lbnRcIjtcblxuLy8gRWxlbWVudHNcbnJlZ2lzdGVyRWxlbWVudChcIk1hcGJveFwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LW1hcGJveFwiKS5NYXBib3hWaWV3KTtcblxuLy8gaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyAgaWYgeW91IG5lZWQgdG8gdXNlIHRoZSBIVFRQIHdyYXBwZXJcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgUm9vbXNDb21wb25lbnQsXG4gICAgICAgIFJvb21DYXJkQ29tcG9uZW50LFxuICAgICAgICBSb29tRGV0YWlsQ29tcG9uZW50LFxuICAgICAgICBSZWdpc3RlckNvbXBvbmVudCxcbiAgICAgICAgQWRkSG9zdENvbXBvbmVudFxuICAgICAgICAvLyBJdGVtRGV0YWlsQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgZGhhZmhTZXJ2aWNlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19