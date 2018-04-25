class Driver {

  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getFullYear()
  }

}

class Route {

  constructor(start, end) {
    this.sh = start.horizontal
    this.sv = start.vertical
    this.eh = end.horizontal
    this.ev = end.vertical
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let sh = eastWest.indexOf(this.sh)
    let eh = eastWest.indexOf(this.eh)

    let totalBlocks = 0

    totalBlocks += (Math.abs(this.ev - this.sv) + Math.abs(sh - eh))

    return totalBlocks
  }

  estimatedTime(peakHours) {
    if (peakHours === true) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }

}
