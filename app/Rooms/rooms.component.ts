import { Component, OnInit } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";

import { iRoom } from "~/Services/room";
import { dhafhService } from "~/Services/dhafh.service";
import { SegmentedBarItem } from "ui/segmented-bar";
import { Frame } from "tns-core-modules/ui/frame/frame";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "d-rooms",
    moduleId: module.id,
    templateUrl: "./rooms.component.html",
    styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
    rooms: iRoom[];
    filters: Array<SegmentedBarItem> = [];

    constructor(private dService: dhafhService, private routerExtensions: RouterExtensions) { }

    ngOnInit(): void {
        this.dService.api.getEntries('rooms').then( (rooms) => {
            this.rooms = <iRoom[]>rooms;
        })

        let segmentedFree = new SegmentedBarItem();
        segmentedFree.title = "مجانا";
        let segmentedTopVote = new SegmentedBarItem();
        segmentedTopVote.title = "الأعلى تقيمًا";
        let segmentedLocation = new SegmentedBarItem();
        segmentedLocation.title = "الأقرب";
        this.filters.push(segmentedFree);
        this.filters.push(segmentedTopVote);
        this.filters.push(segmentedLocation);
    }

    navigateToRoom(args){
        this.routerExtensions.navigate(['/room-detail',this.rooms[args.index].id]);
    }

    navigateToRegister(){
        this.routerExtensions.navigate(['/register']);
    }
}