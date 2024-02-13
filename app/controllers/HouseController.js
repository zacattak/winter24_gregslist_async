import { houseService } from "../services/HouseService.js"
import { Pop } from "../utils/Pop.js"

export class HouseController {
    constructor() {
        console.log('House controller loaded');
        this.getHouses()
    }

    async getHouses() {
        try {
            await houseService.getHouses()
            Pop.success('GOT HOUSES')
        }
        catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }
}
