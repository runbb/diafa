import { Injectable } from "@angular/core";
import { iRoom } from "~/Services/room";
import Strapi from 'strapi-sdk-javascript';

@Injectable()
export class dhafhService{
    private rooms: any = [];
    public api: Strapi

    constructor(){
        this.api = new Strapi('http://206.189.137.251:1337');
        this.api.login('xlmnxp','1x1X1x1qwe123');
    }

    getRooms(): Promise<Array<iRoom>> {
        return fetch("http://206.189.137.251:1337/rooms").then(result => {
            this.rooms = result.json();
            return this.rooms;
        });
    }

    getRoom(id: string): Promise<Array<iRoom>> {
        return this.rooms.then(result => {
            return [].filter.bind(result)(room => room.id == id)[0];
        })
    }
}
