import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { registerElement } from "nativescript-angular/element-registry";
import { AppRoutingModule } from "~/app.routing";
import { AppComponent } from "~/app.component";

// Services
import { dhafhService } from "~/Services/dhafh.service";

// components
import { RoomsComponent } from "~/Rooms/rooms.component";
import { RoomCardComponent } from "~/room-card/room-card.component";
import { RegisterComponent } from "~/register/register.component";
import { RoomDetailComponent } from "~/room-detail/room-detail.component";

// Elements
registerElement("Mapbox", () => require("nativescript-mapbox").MapboxView);

// import { ItemDetailComponent } from "./item/item-detail.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        RoomsComponent,
        RoomCardComponent,
        RegisterComponent,
        RoomDetailComponent
        // ItemDetailComponent
    ],
    providers: [
        dhafhService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
