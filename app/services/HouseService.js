import { api } from "./AxiosService.js"

class HouseService {
    async getHouses() {
        console.log('getting houses!');

        const response = await api.get('api/cars')
        console.log('got cars', response.data)
    }
}

export const houseService = new HouseService()