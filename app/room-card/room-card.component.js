"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RoomCardComponent = /** @class */ (function () {
    function RoomCardComponent() {
        this.room = {};
    }
    RoomCardComponent.prototype.ngOnInit = function () {
        // this.room['photo']['url'] = 'http://206.189.137.251:1337' + this.room['photo']['url'];
    };
    __decorate([
        core_1.Input('room'),
        __metadata("design:type", Object)
    ], RoomCardComponent.prototype, "room", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvb20tY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFRekQ7SUFFRTtRQURlLFNBQUksR0FBRyxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRWpCLG9DQUFRLEdBQVI7UUFDRSx5RkFBeUY7SUFDM0YsQ0FBQztJQUxjO1FBQWQsWUFBSyxDQUFDLE1BQU0sQ0FBQzs7bURBQVc7SUFEZCxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzFDLENBQUM7O09BQ1csaUJBQWlCLENBTzdCO0lBQUQsd0JBQUM7Q0FBQSxBQVBELElBT0M7QUFQWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAncm9vbS1jYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jvb20tY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Jvb20tY2FyZC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJvb21DYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdyb29tJykgcm9vbSA9IHt9O1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIHRoaXMucm9vbVsncGhvdG8nXVsndXJsJ10gPSAnaHR0cDovLzIwNi4xODkuMTM3LjI1MToxMzM3JyArIHRoaXMucm9vbVsncGhvdG8nXVsndXJsJ107XG4gIH1cbn1cbiJdfQ==