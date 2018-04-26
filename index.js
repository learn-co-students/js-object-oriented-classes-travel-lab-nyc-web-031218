// Driver
//
// A driver can be initialized with a name, and a string representing the day that he joined Scuber. Add the following methods and attributes to the class:
//
// startDate — returns a JavaScript Date object. You'll need to use your Googling skills to reference some documentation on how dates work in JavaScript!
//
// yearsExperienceFromBeginningOf — takes an argument of a year and returns the number of years since the driver's startDate. (hint: when creating a new date object, you may want to refer to MDN's documentation on JS's Date object, specifically how to get a date at the beginning of the year)


class Driver{
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year){
    // debugger
    let endYear = new Date(year, 1, 1)

    return  endYear.getFullYear() - this.startDate.getFullYear();

  }


}



class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }


  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    let blocksVertical = Math.abs(this.endingLocation.vertical-this.beginningLocation.vertical)

    let blocksHorizontal = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal)

    return blocksVertical + blocksHorizontal
  }

  estimatedTime(peak){

    if(peak){
      return this.blocksTravelled()/2
    }

    return this.blocksTravelled()/3
  }

}
