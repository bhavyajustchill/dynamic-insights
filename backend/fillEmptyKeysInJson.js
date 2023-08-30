const placementData = require("../data/placementData_old.json");
const fs = require("fs");

function fillEmptyKeysInJson(jsonArray, stringArray, keyName) {
  const resultArray = jsonArray.map((obj) => {
    if (obj[keyName] === "") {
      const randomIndex = Math.floor(Math.random() * stringArray.length);
      obj[keyName] = stringArray[randomIndex];
    }
    return obj;
  });
  return resultArray;
}

const ctc = [800000, 950000, 750000, 1000000, 850000, 1200000, 920000, 680000, 1150000, 880000];

const company = [
  "TechCorp",
  "ElectroTech",
  "MechroWorks",
  "InfoSolutions",
  "BuildTech",
  "BizMinds",
  "ChemCo",
  "EcoSolutions",
  "AeroDynamics",
  "BioGenix",
];

const designation = [
  "Software Developer",
  "Embedded Systems Engineer",
  "Mechanical Design Engineer",
  "IT Consultant",
  "Civil Engineer",
  "Business Analyst",
  "Chemical Process Engineer",
  "Environmental Consultant",
  "Aerospace Engineer",
  "Biotech Researcher",
];

const jobType = ["Full-Time", "Part-Time"];

// Fill empty keys with random values
const resultArray1 = fillEmptyKeysInJson(placementData, ctc, "ctc");
const resultArray2 = fillEmptyKeysInJson(resultArray1, company, "company");
const resultArray3 = fillEmptyKeysInJson(resultArray2, designation, "designation");
const resultArray4 = fillEmptyKeysInJson(resultArray3, jobType, "job_type");

// Convert back to JSON string
const modifiedJson = JSON.stringify(resultArray4, null, 2);

// Write the modified JSON back to a file or do whatever you need
fs.writeFileSync("modified_data.json", modifiedJson);

console.log("Modified JSON array with filled empty keys");
