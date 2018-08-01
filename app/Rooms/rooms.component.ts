import { Component, OnInit } from "@angular/core";

import { iRoom } from "~/Services/room";
import { dhafhService } from "~/Services/dhafh.service";

@Component({
    selector: "d-rooms",
    moduleId: module.id,
    templateUrl: "./rooms.component.html",
    styleUrls: ['./rooms.component.sass']
})
export class roomsComponent implements OnInit {
    items: iRoom[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private dService: dhafhService) { }

    ngOnInit(): void {
        this.items = this.dService.getRooms();
    }
}