export class Car {
  constructor (data) {
    this.id = data.id || data._id
    this.make = data.make
    this.model = data.model
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.color = data.color
    this.engineType = data.engineType
    this.creatorId = data.creatorId
    this.creator = data.creator
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
  }

  get CardHTMLTemplate() {
    return `
    <div class="col-12 mb-3">
      <div class="row bg-light rounded shadow border border-dark">
        <div class="col-md-4 px-0">
          <img
            src="https://dealerinspire-image-library-prod.s3.us-east-1.amazonaws.com/images/I3BvjD2zREK0FinQCGoyqYrgkzVq3CNSOH2eNqik.jpg"
            alt="" class="img-fluid rounded-start car-picture">
        </div>
        <div class="col-md-8 p-3">
          <h2>2004 MAZDA MIATA</h2>
          <h3>$300</h3>
          <h3>Listed on 12/12/1200</h3>
          <div class="d-flex">
            <h4>Listed by SOME DUDE</h4>
            <img class="creator-picture"
              src="https://media0.giphy.com/media/7zApYc8tI0fpsR4Rny/giphy.gif?cid=ecf05e47rjwmcrd6jmfmjmncs5x74gigwtvzhd4hus6b24jt&ep=v1_gifs_related&rid=giphy.gif&ct=g"
              alt="">
          </div>
          <p>ENGINE | COLOR</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eius, sed quisquam eaque impedit voluptatem ex
            pariatur commodi dolorum sapiente.</p>

        </div>
      </div>
    </div>
    `

  }
}

// const carData = {
//   "_id": "6506f47deb8f3614988524ab",
//   "id": "6506f47deb8f3614988524ab",
//   "make": "Aston Martin",
//   "model": "Valhalla",
//   "imgUrl": "https://dealerinspire-image-library-prod.s3.us-east-1.amazonaws.com/images/I3BvjD2zREK0FinQCGoyqYrgkzVq3CNSOH2eNqik.jpg",
//   "year": 2020,
//   "price": 123455,
//   "description": "Ideal",
//   "color": "#3cc34c",
//   "engineType": "chuncko",
//   "creatorId": "650617846fdda188181ba406",
//   "createdAt": "2023-09-17T12:43:41.823Z",
//   "updatedAt": "2023-09-17T12:43:41.823Z",
//   "__v": 0,
//   "creator": {
//     "_id": "650617846fdda188181ba406",
//     "name": "jimmyj",
//     "picture": "https://media0.giphy.com/media/7zApYc8tI0fpsR4Rny/giphy.gif?cid=ecf05e47rjwmcrd6jmfmjmncs5x74gigwtvzhd4hus6b24jt&ep=v1_gifs_related&rid=giphy.gif&ct=g",
//     "id": "650617846fdda188181ba406"
//   },
// }