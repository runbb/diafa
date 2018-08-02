"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// registerElement('Carousel', Carousel, Carousel);
// registerElement('CarouselItem', () => CarouselItem, CarouselItem);
var RoomDetailComponent = /** @class */ (function () {
    function RoomDetailComponent() {
    }
    RoomDetailComponent.prototype.ngOnInit = function () { };
    RoomDetailComponent.prototype.getRandomImage = function () {
        var image = [
            'http://www.mbc.net/default/mediaObject/photos-2017/September-/26-9-2017/ozil%201%20(2)/original/7c3e02797bdebfb620a2ac36871a82bd3cb69380/ozil%201%20(2).jpg',
            'http://images.locationdesign.net//Blog/Posts/2017/1/31/37253_19ffe646-103d-4ef7-ba5b-8a51e7ebf0b9.jpg',
            'http://nisfeldunia.ahram.org.eg/Media/Multimedia/2017/11/27/2017-636473746887893380-789.png',
            'http://www.sayidaty.net/sites/default/files/20/04/2016/1461152194_shutterstock_196122077_copy.jpg',
            'https://static.ounousa.com/Content/ResizedImages/638/654/inside/161010103236076.jpg'
        ];
        return image[Math.floor(Math.random() * (image.length - 1))];
    };
    RoomDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-room-detail',
            templateUrl: './room-detail.component.html',
            styleUrls: ['./room-detail.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], RoomDetailComponent);
    return RoomDetailComponent;
}());
exports.RoomDetailComponent = RoomDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9vbS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELG1EQUFtRDtBQUNuRCxxRUFBcUU7QUFRckU7SUFFRTtJQUFnQixDQUFDO0lBRWpCLHNDQUFRLEdBQVIsY0FBYSxDQUFDO0lBRWQsNENBQWMsR0FBZDtRQUNFLElBQUksS0FBSyxHQUFhO1lBQ3BCLDZKQUE2SjtZQUM3Six1R0FBdUc7WUFDdkcsNkZBQTZGO1lBQzdGLG1HQUFtRztZQUNuRyxxRkFBcUY7U0FDdEYsQ0FBQTtRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBaEJVLG1CQUFtQjtRQU4vQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztTQUM1QyxDQUFDOztPQUNXLG1CQUFtQixDQWlCL0I7SUFBRCwwQkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYXJvdXNlbCwgQ2Fyb3VzZWxJdGVtIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNhcm91c2VsJztcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG4vLyByZWdpc3RlckVsZW1lbnQoJ0Nhcm91c2VsJywgQ2Fyb3VzZWwsIENhcm91c2VsKTtcbi8vIHJlZ2lzdGVyRWxlbWVudCgnQ2Fyb3VzZWxJdGVtJywgKCkgPT4gQ2Fyb3VzZWxJdGVtLCBDYXJvdXNlbEl0ZW0pO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtcm9vbS1kZXRhaWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vcm9vbS1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yb29tLWRldGFpbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJvb21EZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7IH1cblxuICBnZXRSYW5kb21JbWFnZSgpOiBzdHJpbmd7XG4gICAgbGV0IGltYWdlOiBzdHJpbmdbXSA9IFtcbiAgICAgICdodHRwOi8vd3d3Lm1iYy5uZXQvZGVmYXVsdC9tZWRpYU9iamVjdC9waG90b3MtMjAxNy9TZXB0ZW1iZXItLzI2LTktMjAxNy9vemlsJTIwMSUyMCgyKS9vcmlnaW5hbC83YzNlMDI3OTdiZGViZmI2MjBhMmFjMzY4NzFhODJiZDNjYjY5MzgwL296aWwlMjAxJTIwKDIpLmpwZycsXG4gICAgICAnaHR0cDovL2ltYWdlcy5sb2NhdGlvbmRlc2lnbi5uZXQvL0Jsb2cvUG9zdHMvMjAxNy8xLzMxLzM3MjUzXzE5ZmZlNjQ2LTEwM2QtNGVmNy1iYTViLThhNTFlN2ViZjBiOS5qcGcnLFxuICAgICAgJ2h0dHA6Ly9uaXNmZWxkdW5pYS5haHJhbS5vcmcuZWcvTWVkaWEvTXVsdGltZWRpYS8yMDE3LzExLzI3LzIwMTctNjM2NDczNzQ2ODg3ODkzMzgwLTc4OS5wbmcnLFxuICAgICAgJ2h0dHA6Ly93d3cuc2F5aWRhdHkubmV0L3NpdGVzL2RlZmF1bHQvZmlsZXMvMjAvMDQvMjAxNi8xNDYxMTUyMTk0X3NodXR0ZXJzdG9ja18xOTYxMjIwNzdfY29weS5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3RhdGljLm91bm91c2EuY29tL0NvbnRlbnQvUmVzaXplZEltYWdlcy82MzgvNjU0L2luc2lkZS8xNjEwMTAxMDMyMzYwNzYuanBnJ1xuICAgIF1cblxuICAgIHJldHVybiBpbWFnZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaW1hZ2UubGVuZ3RoIC0xKSldO1xuICB9XG59XG4iXX0=