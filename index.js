// Code your solution in this file!
// Assuming Hq is at 42 st
function distanceFromHqInBlocks(location) {
    if (location>42) {
        return location-42;
    } else {
        return 42-location;
    }
}

function distanceFromHqInFeet(location) {
    // 1 block equals 264 ft
    if (location>42) {
        return (location-42)*264;
    } else {
        return (42-location)*264;
    }
}

function distanceTravelledInFeet(start, destination) {
    return (Math.max(start,destination)- Math.min(start,destination))*264;
}

function  calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    if (distance < 400) {
        return 0;
    } else if (distance <= 2000){
        return (distance-400) * 2/100;
    } else if(distance <= 2500){
        return 25;
    } else {
        return 'cannot travel that far';
    }
}