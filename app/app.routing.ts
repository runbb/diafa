import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { RoomsComponent } from "~/Rooms/rooms.component";
import { RegisterComponent } from "~/register/register.component";
import { RoomDetailComponent } from "~/room-detail/room-detail.component";
// import { ItemDetailComponent } from "./item/item-detail.component";

const routes: Routes = [
    { path: "", redirectTo: "/rooms", pathMatch: "full" },
    { path: "rooms", component: RoomsComponent },
    { path: "register", component: RegisterComponent },
    { path: "room-detail", component: RoomDetailComponent}
    // { path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }