import { api } from "./AxiosService.js";

class CarsService {
  async getCars() {
    console.log('getting cars!');

    const response = await api.get('api/cars')

    console.log('📡 got cars', response.data);
  }


}

export const carsService = new CarsService()