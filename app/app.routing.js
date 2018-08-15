"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var rooms_component_1 = require("~/Rooms/rooms.component");
var register_component_1 = require("~/register/register.component");
var room_detail_component_1 = require("~/room-detail/room-detail.component");
var add_host_component_1 = require("~/add-host/add-host.component");
var mapbox_component_1 = require("~/mapbox/mapbox.component");
// import { ItemDetailComponent } from "./item/item-detail.component";
var routes = [
    { path: "", redirectTo: "/rooms", pathMatch: "full" },
    { path: "rooms", component: rooms_component_1.RoomsComponent },
    { path: "register", component: register_component_1.RegisterComponent },
    { path: "room-detail/:id", component: room_detail_component_1.RoomDetailComponent },
    { path: "mapbox/:id", component: mapbox_component_1.MapboxComponent },
    { path: "add-host/:number", component: add_host_component_1.AddHostComponent }
    // { path: "item/:id", component: ItemDetailComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsMkRBQXlEO0FBQ3pELG9FQUFrRTtBQUNsRSw2RUFBMEU7QUFDMUUsb0VBQWlFO0FBQ2pFLDhEQUE0RDtBQUM1RCxzRUFBc0U7QUFFdEUsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUNyRCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7SUFDNUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBRTtJQUNsRCxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsMkNBQW1CLEVBQUM7SUFDMUQsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFDO0lBQ2pELEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxxQ0FBZ0IsRUFBQztJQUN4RCx3REFBd0Q7Q0FDM0QsQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBSb29tc0NvbXBvbmVudCB9IGZyb20gXCJ+L1Jvb21zL3Jvb21zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tIFwifi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJvb21EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwifi9yb29tLWRldGFpbC9yb29tLWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFkZEhvc3RDb21wb25lbnQgfSBmcm9tIFwifi9hZGQtaG9zdC9hZGQtaG9zdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1hcGJveENvbXBvbmVudCB9IGZyb20gXCJ+L21hcGJveC9tYXBib3guY29tcG9uZW50XCI7XG4vLyBpbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9yb29tc1wiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcInJvb21zXCIsIGNvbXBvbmVudDogUm9vbXNDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwicmVnaXN0ZXJcIiwgY29tcG9uZW50OiBSZWdpc3RlckNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJyb29tLWRldGFpbC86aWRcIiwgY29tcG9uZW50OiBSb29tRGV0YWlsQ29tcG9uZW50fSxcbiAgICB7IHBhdGg6IFwibWFwYm94LzppZFwiLCBjb21wb25lbnQ6IE1hcGJveENvbXBvbmVudH0sXG4gICAgeyBwYXRoOiBcImFkZC1ob3N0LzpudW1iZXJcIiwgY29tcG9uZW50OiBBZGRIb3N0Q29tcG9uZW50fVxuICAgIC8vIHsgcGF0aDogXCJpdGVtLzppZFwiLCBjb21wb25lbnQ6IEl0ZW1EZXRhaWxDb21wb25lbnQgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9Il19