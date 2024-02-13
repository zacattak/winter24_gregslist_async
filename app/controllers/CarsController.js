import { AppState } from "../AppState.js";
import { carsService } from "../services/CarsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawCars() {
  const cars = AppState.cars
  let htmlString = ''
  cars.forEach(car => htmlString += car.CardHTMLTemplate)
  setHTML('carListings', htmlString)
}


export class CarsController {
  constructor () {
    console.log('Cars controller loaded');
    this.getCars()

    AppState.on('cars', _drawCars)
  }


  async getCars() {
    try {
      await carsService.getCars()
      Pop.success('GOT CARS')
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}