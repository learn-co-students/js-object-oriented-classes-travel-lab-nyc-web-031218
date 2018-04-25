class Driver {
  constructor(name, date) {
    this.name = name;
    this.startDate = new Date(date);
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
    let start = this.beginningLocation
    let end = this.endingLocation
    let s = 0;
    let e = 0;
    let blocks = Number(end.vertical) - Number(start.vertical)
    for(let key in eastWest) {
      if (start.horizontal === eastWest[key]) {
        s = Number(key);
      }
      if (end.horizontal === eastWest[key]) {
        e = Number(key);
      }
    }
    blocks += (e - s);
    return blocks;
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}
