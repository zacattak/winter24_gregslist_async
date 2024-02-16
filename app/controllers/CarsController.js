import { AppState } from "../AppState.js";
import { carsService } from "../services/CarsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawCars() {
  const cars = AppState.cars
  let htmlString = ''
  cars.forEach(car => htmlString += car.CardHTMLTemplate)
  setHTML('carListings', htmlString)
}

function _drawCarForm() {
  if (!AppState.account) {
    return
  }

  const carFormElement = document.getElementById('carForm')

  if (!carFormElement) {
    return
  }

  carFormElement.classList.remove('d-none')
}


export class CarsController {
  constructor() {
    console.log('Cars controller loaded');
    this.getCars()

    AppState.on('cars', _drawCars)
    AppState.on('account', _drawCars)
    AppState.on('account', _drawCarForm)
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

  async createCar() {
    try {
      event.preventDefault()
      console.log('creating car');

      const form = event.target
      console.log('car form', form);

      const carFormData = getFormData(form)

      // TODO where is my engine type
      console.log('object from form', carFormData);

      await carsService.createCar(carFormData)

      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  async removeCar(carId) {
    try {
      console.log('removing car', carId);

      const wantsToRemove = await Pop.confirm('Are you sure you want to delete this car for forever and ever?')

      if (!wantsToRemove) {
        return
      }

      await carsService.removeCar(carId)

      Pop.success('Car was deleted')
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}