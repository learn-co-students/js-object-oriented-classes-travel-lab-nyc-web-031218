
class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endYear) {
    const startYear = this.startDate.getFullYear()

    return endYear - startYear
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    const vertical = this.endingLocation["vertical"] - this.beginningLocation["vertical"]
    const horizontal = eastWest.indexOf(this.endingLocation["horizontal"]) - eastWest.indexOf(this.beginningLocation["horizontal"])
    return vertical + horizontal
  }

  estimatedTime(peak) {
    const distance = this.blocksTravelled()
    if(peak) {
      return distance/2
    }
    else {
      return distance/3
    }
  }
}
