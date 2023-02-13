let peopleNames = require("../country/state/city/index.js");

let getPeopleFirstNames = require("../utilities/utils/index.js");

const getPeopleInCity = (peopleNames) => {
  return getPeopleFirstNames(peopleNames);
};

module.exports = getPeopleInCity;
