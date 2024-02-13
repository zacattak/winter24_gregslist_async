export class House {
    constructor(data) {
        this.id = data.id || data._id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.creatorId = data.creatorId
        this.createdAt = data.createdAt
        this.updatedAt = data.updatedAt
    }

    get CardHTMLTemplate() {
        return `
        <div class="col-12">
        <div class="row bg-light rounded shadow border border-dark">
            <div class="col-md-4 px-0">
                <img src="" alt="" class="img-fluid rounded-start house-picture">
            </div>
            <div class="col-md-8 p-3">
                <h2>ADOBE HOUSE GALORE</h2>
                <h3>$300</h3>
                <h3>Listed on 12/12/120</h3>
                <div class="d-flex">
                    <h4>Listed by sac</h4>

                </div>
                <p>bedrooms:</p>
                <p>bathrooms:</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eius, sed quisquam eaque impedit
                    voluptatem ex
                    pariatur commodi dolorum sapiente.</p>
            </div>
        </div>
    </div> `
    }

}

// const houseData = {
//     "_id": "645d60f381faf24223ae886b",
//     "id": "645d60f381faf24223ae886b",
//     "bedrooms": 3,
//     "bathrooms": 2,
//     "levels": 2,
//     "imgUrl": "https://floorcentral.com/wp-content/uploads/2014/07/sick-house-syndrome.jpg",
//     "year": 2003,
//     "price": 230000,
//     "description": "Super sick house",
//     "creatorId": "63f7d6202d1cf882287f12e2",
//     "createdAt": "2023-05-11T21:41:07.979Z",
//     "updatedAt": "2023-05-11T21:41:07.979Z",
//     "__v": 0,
//     "creator": { "_id": "63f7d6202d1cf882287f12e2", "name": "Charles Francis Xavier", "picture": "https://www.looper.com/img/gallery/professor-xs-entire-backstory-explained/intro-1587748942.jpg", "id": "63f7d6202d1cf882287f12e2" }
// }