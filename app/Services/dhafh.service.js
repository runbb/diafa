"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var strapi_sdk_javascript_1 = require("strapi-sdk-javascript");
var dhafhService = /** @class */ (function () {
    function dhafhService() {
        this.rooms = [];
        this.api = new strapi_sdk_javascript_1.default('http://206.189.137.251:1337');
        this.api.login('xlmnxp', '1x1X1x1qwe123');
    }
    dhafhService.prototype.distanceToMakkah = function (lat1, lon1, lat2, lon2, unit) {
        if (lat2 === void 0) { lat2 = 21.422510; }
        if (lon2 === void 0) { lon2 = 39.826168; }
        if (unit === void 0) { unit = 'K'; }
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == "K") {
            dist = dist * 1.609344;
        }
        if (unit == "N") {
            dist = dist * 0.8684;
        }
        return dist;
    };
    dhafhService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], dhafhService);
    return dhafhService;
}());
exports.dhafhService = dhafhService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGhhZmguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRoYWZoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsK0RBQTJDO0FBRzNDO0lBSUk7UUFIUSxVQUFLLEdBQVEsRUFBRSxDQUFDO1FBSXBCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSwrQkFBTSxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCx1Q0FBZ0IsR0FBaEIsVUFBaUIsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFjLEVBQUUsSUFBYyxFQUFFLElBQVU7UUFBMUMscUJBQUEsRUFBQSxnQkFBYztRQUFFLHFCQUFBLEVBQUEsZ0JBQWM7UUFBRSxxQkFBQSxFQUFBLFVBQVU7UUFDbkUsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLEdBQUMsR0FBRyxDQUFBO1FBQ2hDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxHQUFDLEdBQUcsQ0FBQTtRQUNoQyxJQUFJLEtBQUssR0FBRyxJQUFJLEdBQUMsSUFBSSxDQUFBO1FBQ3JCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxHQUFDLEdBQUcsQ0FBQTtRQUNsQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUcsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWCxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsQ0FBQztRQUNELElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3RCLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFDLElBQUksQ0FBQyxFQUFFLENBQUE7UUFDekIsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsTUFBTSxDQUFBO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxRQUFRLENBQUE7UUFBQyxDQUFDO1FBQ3pDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUE7UUFBQyxDQUFDO1FBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUE7SUFDZixDQUFDO0lBeEJRLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTs7T0FDQSxZQUFZLENBeUJ4QjtJQUFELG1CQUFDO0NBQUEsQUF6QkQsSUF5QkM7QUF6Qlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGlSb29tIH0gZnJvbSBcIn4vU2VydmljZXMvcm9vbVwiO1xuaW1wb3J0IFN0cmFwaSBmcm9tICdzdHJhcGktc2RrLWphdmFzY3JpcHQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgZGhhZmhTZXJ2aWNle1xuICAgIHByaXZhdGUgcm9vbXM6IGFueSA9IFtdO1xuICAgIHB1YmxpYyBhcGk6IFN0cmFwaVxuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5hcGkgPSBuZXcgU3RyYXBpKCdodHRwOi8vMjA2LjE4OS4xMzcuMjUxOjEzMzcnKTtcbiAgICAgICAgdGhpcy5hcGkubG9naW4oJ3hsbW54cCcsJzF4MVgxeDFxd2UxMjMnKTtcbiAgICB9XG5cbiAgICBkaXN0YW5jZVRvTWFra2FoKGxhdDEsIGxvbjEsIGxhdDI9MjEuNDIyNTEwLCBsb24yPTM5LjgyNjE2OCwgdW5pdCA9ICdLJykge1xuICAgICAgICB2YXIgcmFkbGF0MSA9IE1hdGguUEkgKiBsYXQxLzE4MFxuICAgICAgICB2YXIgcmFkbGF0MiA9IE1hdGguUEkgKiBsYXQyLzE4MFxuICAgICAgICB2YXIgdGhldGEgPSBsb24xLWxvbjJcbiAgICAgICAgdmFyIHJhZHRoZXRhID0gTWF0aC5QSSAqIHRoZXRhLzE4MFxuICAgICAgICB2YXIgZGlzdCA9IE1hdGguc2luKHJhZGxhdDEpICogTWF0aC5zaW4ocmFkbGF0MikgKyBNYXRoLmNvcyhyYWRsYXQxKSAqIE1hdGguY29zKHJhZGxhdDIpICogTWF0aC5jb3MocmFkdGhldGEpO1xuICAgICAgICBpZiAoZGlzdCA+IDEpIHtcbiAgICAgICAgICAgIGRpc3QgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGRpc3QgPSBNYXRoLmFjb3MoZGlzdClcbiAgICAgICAgZGlzdCA9IGRpc3QgKiAxODAvTWF0aC5QSVxuICAgICAgICBkaXN0ID0gZGlzdCAqIDYwICogMS4xNTE1XG4gICAgICAgIGlmICh1bml0PT1cIktcIikgeyBkaXN0ID0gZGlzdCAqIDEuNjA5MzQ0IH1cbiAgICAgICAgaWYgKHVuaXQ9PVwiTlwiKSB7IGRpc3QgPSBkaXN0ICogMC44Njg0IH1cbiAgICAgICAgcmV0dXJuIGRpc3RcbiAgICB9XG59XG4iXX0=