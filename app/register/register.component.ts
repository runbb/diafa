import {
  Component,
  OnInit
} from '@angular/core';
import {
  RouterExtensions
} from "nativescript-angular/router";
@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  verifiedCode: string;
  enteredCode: string;
  phoneNumber: string;
  sendBtnEnabled: boolean = true;
  constructor(public routerExtensions: RouterExtensions) {}

  ngOnInit() {}

  getVerified() {
    this.sendBtnEnabled = false;
    this.verifiedCode = '' + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
    fetch('https://mobily.ws/api/msgSend.php?apiKey=cf09fb2c301440289486c980f2404c3f&numbers=' + this.phoneNumber + '&sender=Octo&msg=' + encodeURIComponent('شكرًا لإستخدامة تطبيق ضيافة كود التحقق الخاص بك هو ' + this.verifiedCode) + '&applicationType=68&returnJson=1&lang=3').then(r => r.json()).then(
      r => {
        if (r.status == 1) {
          alert({
            title: '',
            message: r.Data.MessageAr,
            okButtonText: 'حسنا'
          });
        } else {
          alert({
            title: '',
            message: r.Data.MessageAr,
            okButtonText: 'حسنا'
          });
          this.sendBtnEnabled = true;
        }
      }
    )
  }

  verified() {
    if ('' + this.enteredCode == this.verifiedCode) {
      this.routerExtensions.navigate(['/add-host', this.phoneNumber]);
    } else {
      alert({
        title: '',
        message: 'كود التحقق الذي ادخلته غير صحيح',
        okButtonText: 'حسنا'
      });
    }
  }

  reGetVerified(){
    this.sendBtnEnabled = !this.sendBtnEnabled;
  }
}