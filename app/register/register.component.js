"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.sendBtnEnabled = true;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.getVerified = function () {
        var _this = this;
        this.sendBtnEnabled = false;
        this.verifiedCode = '' + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
        fetch('https://mobily.ws/api/msgSend.php?apiKey=cf09fb2c301440289486c980f2404c3f&numbers=' + this.phoneNumber + '&sender=Octo&msg=' + encodeURIComponent('شكرًا لإستخدامة تطبيق ضيافة كود التحقق الخاص بك هو ' + this.verifiedCode) + '&applicationType=68&returnJson=1&lang=3').then(function (r) { return r.json(); }).then(function (r) {
            if (r.status == 1) {
                alert({
                    title: '',
                    message: r.Data.MessageAr,
                    okButtonText: 'حسنا'
                });
            }
            else {
                alert({
                    title: '',
                    message: r.Data.MessageAr,
                    okButtonText: 'حسنا'
                });
                _this.sendBtnEnabled = true;
            }
        });
    };
    RegisterComponent.prototype.verified = function () {
        if ('' + this.enteredCode == this.verifiedCode) {
            this.routerExtensions.navigate(['/add-host', this.phoneNumber]);
        }
        else {
            alert({
                title: '',
                message: 'كود التحقق الذي ادخلته غير صحيح',
                okButtonText: 'حسنا'
            });
        }
    };
    RegisterComponent.prototype.reGetVerified = function () {
        this.sendBtnEnabled = !this.sendBtnEnabled;
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBR3VCO0FBQ3ZCLHNEQUVxQztBQU9yQztJQUtFLDJCQUFtQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQURyRCxtQkFBYyxHQUFZLElBQUksQ0FBQztJQUN5QixDQUFDO0lBRXpELG9DQUFRLEdBQVIsY0FBWSxDQUFDO0lBRWIsdUNBQVcsR0FBWDtRQUFBLGlCQXFCQztRQXBCQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUMzSixLQUFLLENBQUMsb0ZBQW9GLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxtQkFBbUIsR0FBRyxrQkFBa0IsQ0FBQyxxREFBcUQsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcseUNBQXlDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQVIsQ0FBUSxDQUFDLENBQUMsSUFBSSxDQUN2UyxVQUFBLENBQUM7WUFDQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLEtBQUssQ0FBQztvQkFDSixLQUFLLEVBQUUsRUFBRTtvQkFDVCxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTO29CQUN6QixZQUFZLEVBQUUsTUFBTTtpQkFDckIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLEtBQUssQ0FBQztvQkFDSixLQUFLLEVBQUUsRUFBRTtvQkFDVCxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTO29CQUN6QixZQUFZLEVBQUUsTUFBTTtpQkFDckIsQ0FBQyxDQUFDO2dCQUNILEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzdCLENBQUM7UUFDSCxDQUFDLENBQ0YsQ0FBQTtJQUNILENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0UsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNsRSxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixLQUFLLENBQUM7Z0JBQ0osS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLGlDQUFpQztnQkFDMUMsWUFBWSxFQUFFLE1BQU07YUFDckIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7SUFFRCx5Q0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0MsQ0FBQztJQTlDVSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3pDLENBQUM7eUNBTXFDLHlCQUFnQjtPQUwxQyxpQkFBaUIsQ0ErQzdCO0lBQUQsd0JBQUM7Q0FBQSxBQS9DRCxJQStDQztBQS9DWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFJvdXRlckV4dGVuc2lvbnNcbn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLXJlZ2lzdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHZlcmlmaWVkQ29kZTogc3RyaW5nO1xuICBlbnRlcmVkQ29kZTogc3RyaW5nO1xuICBwaG9uZU51bWJlcjogc3RyaW5nO1xuICBzZW5kQnRuRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7fVxuXG4gIG5nT25Jbml0KCkge31cblxuICBnZXRWZXJpZmllZCgpIHtcbiAgICB0aGlzLnNlbmRCdG5FbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy52ZXJpZmllZENvZGUgPSAnJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBmZXRjaCgnaHR0cHM6Ly9tb2JpbHkud3MvYXBpL21zZ1NlbmQucGhwP2FwaUtleT1jZjA5ZmIyYzMwMTQ0MDI4OTQ4NmM5ODBmMjQwNGMzZiZudW1iZXJzPScgKyB0aGlzLnBob25lTnVtYmVyICsgJyZzZW5kZXI9T2N0byZtc2c9JyArIGVuY29kZVVSSUNvbXBvbmVudCgn2LTZg9ix2YvYpyDZhNil2LPYqtiu2K/Yp9mF2Kkg2KrYt9io2YrZgiDYttmK2KfZgdipINmD2YjYryDYp9mE2KrYrdmC2YIg2KfZhNiu2KfYtSDYqNmDINmH2YggJyArIHRoaXMudmVyaWZpZWRDb2RlKSArICcmYXBwbGljYXRpb25UeXBlPTY4JnJldHVybkpzb249MSZsYW5nPTMnKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4oXG4gICAgICByID0+IHtcbiAgICAgICAgaWYgKHIuc3RhdHVzID09IDEpIHtcbiAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICBtZXNzYWdlOiByLkRhdGEuTWVzc2FnZUFyLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAn2K3Ys9mG2KcnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgbWVzc2FnZTogci5EYXRhLk1lc3NhZ2VBcixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogJ9it2LPZhtinJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuc2VuZEJ0bkVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgdmVyaWZpZWQoKSB7XG4gICAgaWYgKCcnICsgdGhpcy5lbnRlcmVkQ29kZSA9PSB0aGlzLnZlcmlmaWVkQ29kZSkge1xuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL2FkZC1ob3N0JywgdGhpcy5waG9uZU51bWJlcl0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydCh7XG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgbWVzc2FnZTogJ9mD2YjYryDYp9mE2KrYrdmC2YIg2KfZhNiw2Yog2KfYr9iu2YTYqtmHINi62YrYsSDYtdit2YrYrScsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogJ9it2LPZhtinJ1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVHZXRWZXJpZmllZCgpe1xuICAgIHRoaXMuc2VuZEJ0bkVuYWJsZWQgPSAhdGhpcy5zZW5kQnRuRW5hYmxlZDtcbiAgfVxufSJdfQ==