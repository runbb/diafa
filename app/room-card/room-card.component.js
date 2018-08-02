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
            'http://nisfeldunia.ahram.org.eg/Media/Multimedia/2017/11/27/2017-636473746887893380-789.png',
            'http://www.sayidaty.net/sites/default/files/20/04/2016/1461152194_shutterstock_196122077_copy.jpg',
            'https://static.ounousa.com/Content/ResizedImages/638/654/inside/161010103236076.jpg'
        ];
        return image[1];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvb20tY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFRbEQ7SUFFRTtJQUFnQixDQUFDO0lBRWpCLG9DQUFRLEdBQVIsY0FBYSxDQUFDO0lBRWQsMENBQWMsR0FBZDtRQUNFLElBQUksS0FBSyxHQUFhO1lBQ3BCLDZKQUE2SjtZQUM3Six1R0FBdUc7WUFDdkcsNkZBQTZGO1lBQzdGLG1HQUFtRztZQUNuRyxxRkFBcUY7U0FDdEYsQ0FBQTtRQUVELE1BQU0sQ0FBQyxLQUFLLENBQW9ELENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFoQlUsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUMxQyxDQUFDOztPQUNXLGlCQUFpQixDQWlCN0I7SUFBRCx3QkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3Jvb20tY2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9yb29tLWNhcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yb29tLWNhcmQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSb29tQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHsgfVxuXG4gIGdldFJhbmRvbUltYWdlKCk6IHN0cmluZ3tcbiAgICBsZXQgaW1hZ2U6IHN0cmluZ1tdID0gW1xuICAgICAgJ2h0dHA6Ly93d3cubWJjLm5ldC9kZWZhdWx0L21lZGlhT2JqZWN0L3Bob3Rvcy0yMDE3L1NlcHRlbWJlci0vMjYtOS0yMDE3L296aWwlMjAxJTIwKDIpL29yaWdpbmFsLzdjM2UwMjc5N2JkZWJmYjYyMGEyYWMzNjg3MWE4MmJkM2NiNjkzODAvb3ppbCUyMDElMjAoMikuanBnJyxcbiAgICAgICdodHRwOi8vaW1hZ2VzLmxvY2F0aW9uZGVzaWduLm5ldC8vQmxvZy9Qb3N0cy8yMDE3LzEvMzEvMzcyNTNfMTlmZmU2NDYtMTAzZC00ZWY3LWJhNWItOGE1MWU3ZWJmMGI5LmpwZycsXG4gICAgICAnaHR0cDovL25pc2ZlbGR1bmlhLmFocmFtLm9yZy5lZy9NZWRpYS9NdWx0aW1lZGlhLzIwMTcvMTEvMjcvMjAxNy02MzY0NzM3NDY4ODc4OTMzODAtNzg5LnBuZycsXG4gICAgICAnaHR0cDovL3d3dy5zYXlpZGF0eS5uZXQvc2l0ZXMvZGVmYXVsdC9maWxlcy8yMC8wNC8yMDE2LzE0NjExNTIxOTRfc2h1dHRlcnN0b2NrXzE5NjEyMjA3N19jb3B5LmpwZycsXG4gICAgICAnaHR0cHM6Ly9zdGF0aWMub3Vub3VzYS5jb20vQ29udGVudC9SZXNpemVkSW1hZ2VzLzYzOC82NTQvaW5zaWRlLzE2MTAxMDEwMzIzNjA3Ni5qcGcnXG4gICAgXVxuXG4gICAgcmV0dXJuIGltYWdlWy8qTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGltYWdlLmxlbmd0aCAtIDEpKSovIDFdO1xuICB9XG59XG4iXX0=