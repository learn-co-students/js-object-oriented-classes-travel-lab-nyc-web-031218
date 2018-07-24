let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDate){
      return Math.abs(this.startDate.getFullYear() - endDate);
  }
}


class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(){
     // let newArray = [];
     let avenues = {};
        eastWest.map((ave,i)=> {
           avenues[ave] = ++i;
          return avenues;

        });

      let numOfBlocksVerticallyTravelled = this.endingLocation.vertical - this.beginningLocation.vertical;
      let numOfBlocksHorizontallyTravelled = avenues[this.endingLocation.horizontal] - avenues[this.beginningLocation.horizontal];

      let totalBlocksTravelled = numOfBlocksVerticallyTravelled + numOfBlocksHorizontallyTravelled;
      return totalBlocksTravelled;
  }

  estimatedTime(peakHours){
      // let peakHours = false;
      console.log(this.blocksTravelled());
      // console.log(this.blocksTravelled());
      let peakMin = this.blocksTravelled() / 2;
      let offPeakMin = this.blocksTravelled() / 3;

          return  peakHours ? peakMin : offPeakMin;

  }

}
