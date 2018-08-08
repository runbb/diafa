import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-add-host',
  templateUrl: './add-host.component.html',
  styleUrls: ['./add-host.component.scss']
})
export class AddHostComponent implements OnInit {
  public phoneNumber: string = 'Test';
  constructor() {}

  ngOnInit() {}

}