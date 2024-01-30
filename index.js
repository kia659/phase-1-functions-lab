function distanceFromHqInBlocks(pickupLocation) {
const HQ = 42 
if (pickupLocation > HQ) {
return pickupLocation - HQ}
else{
return HQ - pickupLocation} //returns the number of blocks given a value
}

function distanceFromHqInFeet(pickupLocation) {
const feet = 264
const blocks = distanceFromHqInBlocks(pickupLocation)

return feet * blocks
}
function distanceTravelledInFeet(start, destination) {
    if (start > destination) {return (start - destination) * 264 }
        else{
        return (destination - start) * 264} 
}
function calculatesFarePrice(x, y) {
const distance = distanceTravelledInFeet(x, y)
    if (distance > 2500) {
        return ('cannot travel that far')
} else if (distance <= 400) {
return 0;
} else if (distance <= 2000) {
        return (distance - 400) * 0.02;
} else {
        return 25;
}
    }
