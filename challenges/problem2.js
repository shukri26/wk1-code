function checkSpeed(vehiclespeed) {
    const speedLimit = 70;
    const demeritPoint = 5;
    const maxpoint = 12;
  
    if (vehiclespeed < speedLimit) {
      return "Ok";
    } else {
      const excessSpeed = vehiclespeed - speedLimit;
      const demeritPoints = Math.floor(excessSpeed / demeritPoint);
  
      if (demeritPoints > maxpoint) {
        return "License suspended";
      } else {
        return "Points: " + demeritPoints;
      }
    }
  }
  let vehiclespeed = parseInt("100");
  let grid = checkSpeed(vehiclespeed)
  console.log(grid)