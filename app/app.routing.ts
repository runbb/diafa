import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { RoomsComponent } from "~/Rooms/rooms.component";
import { RegisterComponent } from "~/register/register.component";
import { RoomDetailComponent } from "~/room-detail/room-detail.component";
import { AddHostComponent } from "~/add-host/add-host.component";
import { MapboxComponent } from "~/mapbox/mapbox.component";
// import { ItemDetailComponent } from "./item/item-detail.component";

const routes: Routes = [
    { path: "", redirectTo: "/rooms", pathMatch: "full" },
    { path: "rooms", component: RoomsComponent },
    { path: "register", component: RegisterComponent },
    { path: "room-detail/:id", component: RoomDetailComponent},
    { path: "mapbox/:id", component: MapboxComponent},
    { path: "add-host/:number", component: AddHostComponent}
    // { path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }