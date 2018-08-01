"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RoomCardComponent = /** @class */ (function () {
    function RoomCardComponent() {
    }
    RoomCardComponent.prototype.ngOnInit = function () { };
    RoomCardComponent.prototype.getRandomImage = function () {
        var image = [
            'http://www.mbc.net/default/mediaObject/photos-2017/September-/26-9-2017/ozil%201%20(2)/original/7c3e02797bdebfb620a2ac36871a82bd3cb69380/ozil%201%20(2).jpg',
            'http://images.locationdesign.net//Blog/Posts/2017/1/31/37253_19ffe646-103d-4ef7-ba5b-8a51e7ebf0b9.jpg',
            'https://www.zoomtaqnia.com/wp-content/uploads/2015/05/sweethome3d-600x330.jpg',
            'http://nisfeldunia.ahram.org.eg/Media/Multimedia/2017/11/27/2017-636473746887893380-789.png',
            'http://www.sayidaty.net/sites/default/files/20/04/2016/1461152194_shutterstock_196122077_copy.jpg',
            'https://static.ounousa.com/Content/ResizedImages/638/654/inside/161010103236076.jpg'
        ];
        return image[Math.floor(Math.random() * (image.length - 1))];
    };
    RoomCardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'room-card',
            templateUrl: './room-card.component.html',
            styleUrls: ['./room-card.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], RoomCardComponent);
    return RoomCardComponent;
}());
exports.RoomCardComponent = RoomCardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvb20tY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFRbEQ7SUFFRTtJQUFnQixDQUFDO0lBRWpCLG9DQUFRLEdBQVIsY0FBYSxDQUFDO0lBRWQsMENBQWMsR0FBZDtRQUNFLElBQUksS0FBSyxHQUFhO1lBQ3BCLDZKQUE2SjtZQUM3Six1R0FBdUc7WUFDdkcsK0VBQStFO1lBQy9FLDZGQUE2RjtZQUM3RixtR0FBbUc7WUFDbkcscUZBQXFGO1NBQ3RGLENBQUE7UUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQWpCVSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzFDLENBQUM7O09BQ1csaUJBQWlCLENBa0I3QjtJQUFELHdCQUFDO0NBQUEsQUFsQkQsSUFrQkM7QUFsQlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAncm9vbS1jYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jvb20tY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Jvb20tY2FyZC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJvb21DYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG5cbiAgZ2V0UmFuZG9tSW1hZ2UoKTogc3RyaW5ne1xuICAgIGxldCBpbWFnZTogc3RyaW5nW10gPSBbXG4gICAgICAnaHR0cDovL3d3dy5tYmMubmV0L2RlZmF1bHQvbWVkaWFPYmplY3QvcGhvdG9zLTIwMTcvU2VwdGVtYmVyLS8yNi05LTIwMTcvb3ppbCUyMDElMjAoMikvb3JpZ2luYWwvN2MzZTAyNzk3YmRlYmZiNjIwYTJhYzM2ODcxYTgyYmQzY2I2OTM4MC9vemlsJTIwMSUyMCgyKS5qcGcnLFxuICAgICAgJ2h0dHA6Ly9pbWFnZXMubG9jYXRpb25kZXNpZ24ubmV0Ly9CbG9nL1Bvc3RzLzIwMTcvMS8zMS8zNzI1M18xOWZmZTY0Ni0xMDNkLTRlZjctYmE1Yi04YTUxZTdlYmYwYjkuanBnJyxcbiAgICAgICdodHRwczovL3d3dy56b29tdGFxbmlhLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8wNS9zd2VldGhvbWUzZC02MDB4MzMwLmpwZycsXG4gICAgICAnaHR0cDovL25pc2ZlbGR1bmlhLmFocmFtLm9yZy5lZy9NZWRpYS9NdWx0aW1lZGlhLzIwMTcvMTEvMjcvMjAxNy02MzY0NzM3NDY4ODc4OTMzODAtNzg5LnBuZycsXG4gICAgICAnaHR0cDovL3d3dy5zYXlpZGF0eS5uZXQvc2l0ZXMvZGVmYXVsdC9maWxlcy8yMC8wNC8yMDE2LzE0NjExNTIxOTRfc2h1dHRlcnN0b2NrXzE5NjEyMjA3N19jb3B5LmpwZycsXG4gICAgICAnaHR0cHM6Ly9zdGF0aWMub3Vub3VzYS5jb20vQ29udGVudC9SZXNpemVkSW1hZ2VzLzYzOC82NTQvaW5zaWRlLzE2MTAxMDEwMzIzNjA3Ni5qcGcnXG4gICAgXVxuXG4gICAgcmV0dXJuIGltYWdlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpbWFnZS5sZW5ndGggLTEpKV07XG4gIH1cbn1cbiJdfQ==