import { Injectable } from "@angular/core";
import { iRoom } from "~/Services/room";
import Strapi from 'strapi-sdk-javascript';

@Injectable()
export class dhafhService{
    private rooms: any = [];
    public api: Strapi

    constructor(){
        this.api = new Strapi('http://206.189.137.251:1337');
    }

    distanceToMakkah(lat1, lon1, lat2=21.422510, lon2=39.826168, unit = 'K') {
        var radlat1 = Math.PI * lat1/180
        var radlat2 = Math.PI * lat2/180
        var theta = lon1-lon2
        var radtheta = Math.PI * theta/180
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist)
        dist = dist * 180/Math.PI
        dist = dist * 60 * 1.1515
        if (unit=="K") { dist = dist * 1.609344 }
        if (unit=="N") { dist = dist * 0.8684 }
        return dist
    }
}
