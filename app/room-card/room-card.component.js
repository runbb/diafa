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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvb20tY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFRbEQ7SUFFRTtJQUFnQixDQUFDO0lBRWpCLG9DQUFRLEdBQVIsY0FBYSxDQUFDO0lBRWQsMENBQWMsR0FBZDtRQUNFLElBQUksS0FBSyxHQUFhO1lBQ3BCLDZKQUE2SjtZQUM3Six1R0FBdUc7WUFDdkcsNkZBQTZGO1lBQzdGLG1HQUFtRztZQUNuRyxxRkFBcUY7U0FDdEYsQ0FBQTtRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBaEJVLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDMUMsQ0FBQzs7T0FDVyxpQkFBaUIsQ0FpQjdCO0lBQUQsd0JBQUM7Q0FBQSxBQWpCRCxJQWlCQztBQWpCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdyb29tLWNhcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcm9vbS1jYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcm9vbS1jYXJkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUm9vbUNhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7IH1cblxuICBnZXRSYW5kb21JbWFnZSgpOiBzdHJpbmd7XG4gICAgbGV0IGltYWdlOiBzdHJpbmdbXSA9IFtcbiAgICAgICdodHRwOi8vd3d3Lm1iYy5uZXQvZGVmYXVsdC9tZWRpYU9iamVjdC9waG90b3MtMjAxNy9TZXB0ZW1iZXItLzI2LTktMjAxNy9vemlsJTIwMSUyMCgyKS9vcmlnaW5hbC83YzNlMDI3OTdiZGViZmI2MjBhMmFjMzY4NzFhODJiZDNjYjY5MzgwL296aWwlMjAxJTIwKDIpLmpwZycsXG4gICAgICAnaHR0cDovL2ltYWdlcy5sb2NhdGlvbmRlc2lnbi5uZXQvL0Jsb2cvUG9zdHMvMjAxNy8xLzMxLzM3MjUzXzE5ZmZlNjQ2LTEwM2QtNGVmNy1iYTViLThhNTFlN2ViZjBiOS5qcGcnLFxuICAgICAgJ2h0dHA6Ly9uaXNmZWxkdW5pYS5haHJhbS5vcmcuZWcvTWVkaWEvTXVsdGltZWRpYS8yMDE3LzExLzI3LzIwMTctNjM2NDczNzQ2ODg3ODkzMzgwLTc4OS5wbmcnLFxuICAgICAgJ2h0dHA6Ly93d3cuc2F5aWRhdHkubmV0L3NpdGVzL2RlZmF1bHQvZmlsZXMvMjAvMDQvMjAxNi8xNDYxMTUyMTk0X3NodXR0ZXJzdG9ja18xOTYxMjIwNzdfY29weS5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3RhdGljLm91bm91c2EuY29tL0NvbnRlbnQvUmVzaXplZEltYWdlcy82MzgvNjU0L2luc2lkZS8xNjEwMTAxMDMyMzYwNzYuanBnJ1xuICAgIF1cblxuICAgIHJldHVybiBpbWFnZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaW1hZ2UubGVuZ3RoIC0xKSldO1xuICB9XG59XG4iXX0=