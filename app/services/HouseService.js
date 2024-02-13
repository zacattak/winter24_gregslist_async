import { api } from "./AxiosService.js"

class HouseService {
    async getHouses() {
        console.log('getting houses!');

        const response = await api.get('api/houses')
        console.log('got houses', response.data)
    }
}

export const houseService = new HouseService()