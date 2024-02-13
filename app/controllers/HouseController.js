import { AppState } from "../AppState.js";
import { houseService } from "../services/HouseService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawHouses() {
    const houses = AppState.houses
    let htmlString = ''
    houses.forEach(house => htmlString += house.CardHTMLTemplate)
    setHTML('houseListings', htmlString)

}

export class HouseController {
    constructor() {
        console.log('House controller loaded');
        this.getHouses()

        AppState.on('houses', _drawHouses)
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
