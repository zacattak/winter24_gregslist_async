import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";
import { api } from "./AxiosService.js";

class CarsService {
  async getCars() {
    console.log('getting cars!');

    const response = await api.get('api/cars')

    console.log('📡 got cars', response.data);

    const newCars = response.data.map(carPOJO => new Car(carPOJO))

    console.log('mapped over cars', newCars);

    AppState.cars = newCars
  }


}

export const carsService = new CarsService()