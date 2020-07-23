class Traveler {
    constructor (name, food) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt () {return this.food += 2}
    eat () {
        if (this.food === 0) {this.isHealthy = false} 
        else {return this.food -= 1}
    }
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
        let healthStatusArray = []
        for (let counter = 0; counter <this.passengers.length; counter += 1) {
            healthStatusArray.push(this.passengers[counter].isHealthy)
        }
        return healthStatusArray.some(function (value, index, array) {
            if (value === false) {return true} else {return false}
        })
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

class Doctor extends Traveler {
    constructor (name, food) {
        super(name, food)
    }
    heal (traveler) {traveler.isHealthy = true}
}

class Hunter extends Traveler {
    constructor(name, food) {
        super (name, food)
        this.food = 2
    }
    hunt () {this.food += 5}

    eat () {
        this.food -= 2
        if (this.food < 2) {
            this.food = 0
            this.isHealthy = false
        }
    }

    giveFood (traveler, numOfFoodUnits) {
        if (numOfFoodUnits < this.food) {
            traveler.food += numOfFoodUnits
            this.food -= numOfFoodUnits
        }
    }
}