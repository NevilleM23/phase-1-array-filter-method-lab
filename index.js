// Code your solution here

function findMatching(drivers, name){
    return drivers.filter(driver => driver.toLowerCase() ===  name.toLowerCase())    
}

function fuzzyMatch(drivers, firstLetter){
    return drivers.filter(driver => driver.startsWith(firstLetter))
} 

function matchName(drivers, name){
    return drivers.filter(driver => driver.name === name )
}