import {Component, Input, OnInit} from '@angular/core';
import {DeviceService} from '../services/device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.sass']
})
export class DeviceComponent implements OnInit {

  @Input() deviceName: string;
  @Input() deviceStatus: string;
  @Input() indexOfDevice: number;
  @Input() id: number;

  constructor(private deviceService: DeviceService) {
  }

  ngOnInit() {
  }

  getSatus() {
    return this.deviceStatus;
  }

  getColor() {
    if (this.deviceStatus === 'On') {
      return 'green';
    } else if (this.deviceStatus === 'Off') {
      return 'red';
    }
  }

  onSwitchOn() {
    this.deviceService.switchOnOne(this.indexOfDevice);
  }

  onSwitchOff() {
    this.deviceService.switchOffOne(this.indexOfDevice);
  }
}
