// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function afterEach (){

}

function returnFirstTwoDrivers (drivers){
    return drivers.slice(0, 2);
};

function returnLastTwoDrivers (drivers){
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (multiplier){
    const fareMultiplier = (fare) => {
        return fare * multiplier;
    };
    return fareMultiplier;
};

function fareDoubler (fare){
    return fare * 2;
};

function fareTripler (fare){
    return fare * 3;
};

function selectDifferentDrivers (arrayOfDrivers, func){
    return func(arrayOfDrivers);
};