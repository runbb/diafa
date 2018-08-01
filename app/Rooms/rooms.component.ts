import { Component, OnInit } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";

import { iRoom } from "~/Services/room";
import { dhafhService } from "~/Services/dhafh.service";
import { SegmentedBarItem } from "ui/segmented-bar";
registerElement("fab", () => require("nativescript-floatingactionbutton").Fab);

@Component({
    selector: "d-rooms",
    moduleId: module.id,
    templateUrl: "./rooms.component.html",
    styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
    items: iRoom[];
    filters: Array<SegmentedBarItem> = [];
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private dService: dhafhService) { }

    ngOnInit(): void {
        this.items = this.dService.getRooms();

        let segmentedLowPrice = new SegmentedBarItem();
        segmentedLowPrice.title = "الأقل سعرًا";
        let segmentedTopVote = new SegmentedBarItem();
        segmentedTopVote.title = "الأعلى تقيميًا";
        let segmentedLocation = new SegmentedBarItem();
        segmentedLocation.title = "الأقرب";
        this.filters.push(segmentedLowPrice);
        this.filters.push(segmentedTopVote);
        this.filters.push(segmentedLocation);
    }
}