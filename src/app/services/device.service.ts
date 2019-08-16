export class DeviceService {
  devices = [
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
  }

  switchOffAll() {
    for (let device of this.devices) {
      device.status = 'Off';
    }
  }

  switchOnOne(index: number) {
    this.devices[index].status = 'On';
  }

  switchOffOne(index: number) {
    this.devices[index].status = 'Off';
  }
}
