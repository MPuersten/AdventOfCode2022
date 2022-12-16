import Sensor from "./sensor";

export default class SensorCollection {
    public sensors: Sensor[] = [];
    
    constructor (
    ) {

    }

    public addSensor(sensor: Sensor) {
        this.sensors.push(sensor);
    }

    public getNonBeaconCountInRow(row: number): number {
        const emptyX = this.sensors.reduce((xSet, sensor) => {
            sensor.scanRow(row).forEach(position => position.Y === row && xSet.add(position.X));
            return xSet;
          }, new Set<number>());
      
          return emptyX.size;
    }
}