class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    const beginHorizontal = eastWest.indexOf(this.beginningLocation.horizontal);
    const endHorizontal = eastWest.indexOf(this.endingLocation.horizontal);

    const beginVertical = this.beginningLocation.vertical;
    const endVertical = this.endingLocation.vertical;

    const horizontalDistance = Math.abs(endHorizontal - beginHorizontal);
    const verticalDistance = Math.abs(endVertical - beginVertical);

    return horizontalDistance + verticalDistance;
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}
