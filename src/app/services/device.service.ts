import {Subject} from 'rxjs';

export class DeviceService {

  deviceSubject = new Subject<any[]>();
  private devices = [
    {
      id: 1,
      name: 'Télévision',
      status: 'Off'
    },
    {
      id: 2,
      name: 'Ordinateur',
      status: 'On'
    },
    {
      id: 3,
      name: 'Tablette',
      status: 'Off'
    }
  ];

  emitDeviceSubject() {
    this.deviceSubject.next(this.devices.slice());
  }

  getDeviceById(id: number) {
    const device = this.devices.find(
      (deviceObject) => {
        return deviceObject.id === id;
      }
    );
    return device;
  }

  switchOnAll() {
    for (let device of this.devices) {
      device.status = 'On';
    }
    this.emitDeviceSubject();
  }

  switchOffAll() {
    for (let device of this.devices) {
      device.status = 'Off';
    }
    this.emitDeviceSubject();
  }

  switchOnOne(index: number) {
    this.devices[index].status = 'On';
    this.emitDeviceSubject();
  }

  switchOffOne(index: number) {
    this.devices[index].status = 'Off';
    this.emitDeviceSubject();
  }

  addDevice(name: string, status: string) {
    const deviceObject = {
      id: 0,
      name: '',
      status: '',
    };
    deviceObject.name = name;
    deviceObject.status = status;
    deviceObject.id = this.devices[(this.devices.length - 1)].id + 1;
    this.devices.push(deviceObject);
    this.emitDeviceSubject();
  }
}
