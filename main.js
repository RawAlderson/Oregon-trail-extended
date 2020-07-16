class Traveler {
    constructor (name, food) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt () {return this.food += 2}
    eat () {
        if (this.food <= 0) {this.food = 0; this.isHealthy = false}
        else return this.food -= 1}
}

class Wagon {
    constructor (capacity, passengers) {
        this.capacity = capacity
        this.passengers = []
    }
    getAvailableSeatCount () {
        return this.capacity - this.passengers.length
    }
    join (traveler) {
        this.passengers.push(traveler)
        if (this.capacity < this.passengers.length) {
            this.passengers.pop()
        }
    }
    shouldQuarantine () {
        for (let counter = 0; counter < this.passengers.length; counter += 1) {
        if ((this.passengers[counter]).isHealthy === false) {return true}
        }
    }
    totalFood () {
        let foodArray = []
        for (let counter = 0; counter < this.passengers.length; counter += 1) {
            foodArray.push(this.passengers[counter].food)
        }
        return foodArray.reduce(function (travelerX, travelerY) {
            return travelerX + travelerY
        })
    }
}