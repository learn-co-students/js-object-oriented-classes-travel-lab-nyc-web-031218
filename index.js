class Driver{
  constructor(name, joined){
    this.name = name;
    this.startDate = new Date(joined)
  }

  yearsExperienceFromBeginningOf(year){
    return new Date(year) - this.startDate.getFullYear();
  }


}
class Route{
  constructor(begin, end){
    this.beginningLocation = begin;
    this.endingLocation = end;
  }

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    return Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
      + Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal)) ;

  }

  estimatedTime(isPeak = false){
    // During off peak hours, a driver travels three blocks in a minute,
    // while during peak hours a driver travels an estimated two blocks in a minute.

    if(isPeak){
      return parseInt(this.blocksTravelled()/2, 10)
    }else{
      return parseInt(this.blocksTravelled()/3, 10);
    }
  }

}
