export class Car {
  constructor (data) {
    this.id = data.id || data._id
    this.make = data.make
    this.model = data.model
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
}

const carData = {
  "_id": "6506f47deb8f3614988524ab",
  "id": "6506f47deb8f3614988524ab",
  "make": "Aston Martin",
  "model": "Valhalla",
  "imgUrl": "https://dealerinspire-image-library-prod.s3.us-east-1.amazonaws.com/images/I3BvjD2zREK0FinQCGoyqYrgkzVq3CNSOH2eNqik.jpg",
  "year": 2020,
  "price": 123455,
  "description": "Ideal",
  "color": "#3cc34c",
  "engineType": "chuncko",
  "creatorId": "650617846fdda188181ba406",
  "createdAt": "2023-09-17T12:43:41.823Z",
  "updatedAt": "2023-09-17T12:43:41.823Z",
  "__v": 0,
  "creator": {
    "_id": "650617846fdda188181ba406",
    "name": "jimmyj",
    "picture": "https://media0.giphy.com/media/7zApYc8tI0fpsR4Rny/giphy.gif?cid=ecf05e47rjwmcrd6jmfmjmncs5x74gigwtvzhd4hus6b24jt&ep=v1_gifs_related&rid=giphy.gif&ct=g",
    "id": "650617846fdda188181ba406"
  },
}