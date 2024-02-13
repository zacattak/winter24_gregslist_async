import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";
import { api } from "./AxiosService.js";

class CarsService {
  async createCar(carFormData) {
    // console.log('car form data', carFormData);

    const response = await api.post('api/cars', carFormData)

    console.log('📡 creating car', response.data);

    const newCar = new Car(response.data)

    console.log('new car', newCar);

    AppState.cars.push(newCar)
    // AppState.cars.unshift(newCar)
  }

  async getCars() {
    console.log('getting cars!');

    const response = await api.get('api/cars')

    console.log('📡 got cars', response.data);

    const newCars = response.data.map(carPOJO => new Car(carPOJO))

    console.log('mapped over cars', newCars);

    // newCars.reverse()

    AppState.cars = newCars
  }


}

export const carsService = new CarsService()