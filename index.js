class Driver {
  constructor (name, startDay){
    this.name = name
    this.startDay = startDay
    this.startDate = new Date(this.startDay)
  }
  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
}

const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor (beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  blocksTravelled() {
    let vertical = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    let horizontal = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))
    return vertical + horizontal
  }
  estimatedTime(peak) {
    let multiplier = (peak ? 2 : 3)
    return this.blocksTravelled() / multiplier
  }
}
