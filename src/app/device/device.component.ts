import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.sass']
})
export class DeviceComponent implements OnInit {

  @Input() deviceName: string;
  @Input() deviceStatus: string;

  constructor() { }

  ngOnInit() {
  }

  getSatus() {
    return this.deviceStatus;
  }

}
