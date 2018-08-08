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
    dhafhService.prototype.getRooms = function () {
        var _this = this;
        return fetch("http://206.189.137.251:1337/rooms").then(function (result) {
            _this.rooms = result.json();
            return _this.rooms;
        });
    };
    dhafhService.prototype.getRoom = function (id) {
        return this.rooms.then(function (result) {
            return [].filter.bind(result)(function (room) { return room.id == id; })[0];
        });
    };
    dhafhService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], dhafhService);
    return dhafhService;
}());
exports.dhafhService = dhafhService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGhhZmguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRoYWZoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsK0RBQTJDO0FBRzNDO0lBSUk7UUFIUSxVQUFLLEdBQVEsRUFBRSxDQUFDO1FBSXBCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSwrQkFBTSxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQUEsaUJBS0M7UUFKRyxNQUFNLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUN6RCxLQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzQixNQUFNLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw4QkFBTyxHQUFQLFVBQVEsRUFBVTtRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07WUFDekIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQWIsQ0FBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBcEJRLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTs7T0FDQSxZQUFZLENBcUJ4QjtJQUFELG1CQUFDO0NBQUEsQUFyQkQsSUFxQkM7QUFyQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGlSb29tIH0gZnJvbSBcIn4vU2VydmljZXMvcm9vbVwiO1xuaW1wb3J0IFN0cmFwaSBmcm9tICdzdHJhcGktc2RrLWphdmFzY3JpcHQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgZGhhZmhTZXJ2aWNle1xuICAgIHByaXZhdGUgcm9vbXM6IGFueSA9IFtdO1xuICAgIHB1YmxpYyBhcGk6IFN0cmFwaVxuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5hcGkgPSBuZXcgU3RyYXBpKCdodHRwOi8vMjA2LjE4OS4xMzcuMjUxOjEzMzcnKTtcbiAgICAgICAgdGhpcy5hcGkubG9naW4oJ3hsbW54cCcsJzF4MVgxeDFxd2UxMjMnKTtcbiAgICB9XG5cbiAgICBnZXRSb29tcygpOiBQcm9taXNlPEFycmF5PGlSb29tPj4ge1xuICAgICAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vMjA2LjE4OS4xMzcuMjUxOjEzMzcvcm9vbXNcIikudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgdGhpcy5yb29tcyA9IHJlc3VsdC5qc29uKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yb29tcztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0Um9vbShpZDogc3RyaW5nKTogUHJvbWlzZTxBcnJheTxpUm9vbT4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm9vbXMudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFtdLmZpbHRlci5iaW5kKHJlc3VsdCkocm9vbSA9PiByb29tLmlkID09IGlkKVswXTtcbiAgICAgICAgfSlcbiAgICB9XG59XG4iXX0=