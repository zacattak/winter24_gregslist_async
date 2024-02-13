import { carsService } from "../services/CarsService.js";
import { Pop } from "../utils/Pop.js";

export class CarsController {
  constructor () {
    console.log('Cars controller loaded');
    this.getCars()
  }


  getCars() {
    try {
      carsService.getCars()
      Pop.success('GOT CARS')
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}