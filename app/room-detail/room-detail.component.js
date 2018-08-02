"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("Carousel", function () { return require("nativescript-carousel").Carousel; });
element_registry_1.registerElement("CarouselItem", function () { return require("nativescript-carousel").CarouselItem; });
var RoomDetailComponent = /** @class */ (function () {
    function RoomDetailComponent() {
        this.room = {
            "latitude": "21.616851",
            "longitude": "39.156463"
        };
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
        return image[1];
    };
    RoomDetailComponent.prototype.onMapReady = function ($event) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9vbS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBR3VCO0FBS3ZCLDBFQUUrQztBQUUvQyxrQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFDN0Usa0NBQWUsQ0FBQyxjQUFjLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFlBQVksRUFBN0MsQ0FBNkMsQ0FBQyxDQUFDO0FBUXJGO0lBS0U7UUFKTyxTQUFJLEdBQVc7WUFDcEIsVUFBVSxFQUFFLFdBQVc7WUFDdkIsV0FBVyxFQUFFLFdBQVc7U0FDekIsQ0FBQTtJQUNjLENBQUM7SUFFaEIsc0NBQVEsR0FBUixjQUFZLENBQUM7SUFFYiw0Q0FBYyxHQUFkO1FBQ0UsSUFBSSxLQUFLLEdBQWE7WUFDcEIsNkpBQTZKO1lBQzdKLHVHQUF1RztZQUN2Ryw2RkFBNkY7WUFDN0YsbUdBQW1HO1lBQ25HLHFGQUFxRjtTQUN0RixDQUFBO1FBRUQsTUFBTSxDQUFDLEtBQUssQ0FBb0QsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELHdDQUFVLEdBQVYsVUFBVyxNQUFNO0lBRWpCLENBQUM7SUF2QlUsbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzVDLENBQUM7O09BQ1csbUJBQW1CLENBd0IvQjtJQUFELDBCQUFDO0NBQUEsQUF4QkQsSUF3QkM7QUF4Qlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDYXJvdXNlbCxcbiAgQ2Fyb3VzZWxJdGVtXG59IGZyb20gJ25hdGl2ZXNjcmlwdC1jYXJvdXNlbCc7XG5pbXBvcnQge1xuICByZWdpc3RlckVsZW1lbnRcbn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcblxucmVnaXN0ZXJFbGVtZW50KFwiQ2Fyb3VzZWxcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jYXJvdXNlbFwiKS5DYXJvdXNlbCk7XG5yZWdpc3RlckVsZW1lbnQoXCJDYXJvdXNlbEl0ZW1cIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jYXJvdXNlbFwiKS5DYXJvdXNlbEl0ZW0pO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtcm9vbS1kZXRhaWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vcm9vbS1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yb29tLWRldGFpbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJvb21EZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgcm9vbTogT2JqZWN0ID0ge1xuICAgIFwibGF0aXR1ZGVcIjogXCIyMS42MTY4NTFcIixcbiAgICBcImxvbmdpdHVkZVwiOiBcIjM5LjE1NjQ2M1wiXG4gIH1cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge31cblxuICBnZXRSYW5kb21JbWFnZSgpOiBzdHJpbmcge1xuICAgIGxldCBpbWFnZTogc3RyaW5nW10gPSBbXG4gICAgICAnaHR0cDovL3d3dy5tYmMubmV0L2RlZmF1bHQvbWVkaWFPYmplY3QvcGhvdG9zLTIwMTcvU2VwdGVtYmVyLS8yNi05LTIwMTcvb3ppbCUyMDElMjAoMikvb3JpZ2luYWwvN2MzZTAyNzk3YmRlYmZiNjIwYTJhYzM2ODcxYTgyYmQzY2I2OTM4MC9vemlsJTIwMSUyMCgyKS5qcGcnLFxuICAgICAgJ2h0dHA6Ly9pbWFnZXMubG9jYXRpb25kZXNpZ24ubmV0Ly9CbG9nL1Bvc3RzLzIwMTcvMS8zMS8zNzI1M18xOWZmZTY0Ni0xMDNkLTRlZjctYmE1Yi04YTUxZTdlYmYwYjkuanBnJyxcbiAgICAgICdodHRwOi8vbmlzZmVsZHVuaWEuYWhyYW0ub3JnLmVnL01lZGlhL011bHRpbWVkaWEvMjAxNy8xMS8yNy8yMDE3LTYzNjQ3Mzc0Njg4Nzg5MzM4MC03ODkucG5nJyxcbiAgICAgICdodHRwOi8vd3d3LnNheWlkYXR5Lm5ldC9zaXRlcy9kZWZhdWx0L2ZpbGVzLzIwLzA0LzIwMTYvMTQ2MTE1MjE5NF9zaHV0dGVyc3RvY2tfMTk2MTIyMDc3X2NvcHkuanBnJyxcbiAgICAgICdodHRwczovL3N0YXRpYy5vdW5vdXNhLmNvbS9Db250ZW50L1Jlc2l6ZWRJbWFnZXMvNjM4LzY1NC9pbnNpZGUvMTYxMDEwMTAzMjM2MDc2LmpwZydcbiAgICBdXG5cbiAgICByZXR1cm4gaW1hZ2VbLypNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaW1hZ2UubGVuZ3RoIC0gMSkpKi8gMV07XG4gIH1cblxuICBvbk1hcFJlYWR5KCRldmVudCkge1xuXG4gIH1cbn0iXX0=