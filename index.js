class Driver {
  constructor(name, day, startDate){
    this.name = name;
    this.day = day;
    this.startDate = new Date;
  }

  yearsExperienceFromBeginningOf(year){
  const startyr = (this.day).split(" ")
  return year - startyr[2]
  }
};


class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue',
    'Lexington Avenue','Park', 'Madison Avenue', '5th Avenue']
    //SpecificRoute -->({horizontal: '1st Avenue', vertical: '34'}, {horizontal: 'Park', vertical: '34'})
    //calculates the number of blocksTravelled
    //(actual blocks subtraction involved)
    const vert = this.endingLocation.vertical - this.beginningLocation.vertical
    //calculates the number of horizontal blocks travelled
    const hblock = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal);
    //(actual horizontal blocks travelled need to convert into numbers)
    //combines horizontal and vertical blocks travelled
    return (vert + hblock)
    // (add the above together ^^)
  }

  estimatedTime(peakHours){
    //SpecificRoute --->({horizontal: '1st Avenue', vertical: '34'}, {horizontal: 'Park', vertical: '34'})
    //estimates time in minutes, with travel time of three blocks in a minute
    //estimates time in minutes, with travel time of two blocks in a minute during peak hours
    if (peakHours){
      return this.blocksTravelled() / 2
    }else{
      return this.blocksTravelled() / 3
    }
  }
};
