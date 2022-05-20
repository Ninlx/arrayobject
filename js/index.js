// Array and Object of Personal Information
/*

  Position Desired:
  Date:
  Name:
  Gender:
  City Address: 
  Provincial Address:
  Telephone:
  Cellphone:
  E-main Address:
  Date of Birth:
  Birth of Place:
  Civil Status:
  Citizenship:
  Height:
  Weight:
  Religion:
  Spouse:
  Occupation:
  Name of Children:
  Date of Birth:

  Language or dialec spoken and written:
  Person to be contacted in case of emergency:
  His or her address and telephone:
*/

const personInfo = {
  positionDesired: "web developer",
  date: "05-20-2022",
  name: "jeffern malinao",
  gender: "male",
  cityAddress: "new pandan, panabo city, davao del norte, philippines",
  provincialAddress:
    "1760 molave street, new pandan, panabo city, davao del norte, philippines",
  telephone: "",
  cellphone: "09317348750",
  eMailAddress: "jefferndullamalinao@gmail.com",
  dateofBirth: "04-02-1997",
  birthofPlace: "tagum city, philippines",
  civilStatus: "single",
  citizenship: "filipino",
  height: "173 cm",
  weight: "83 kg",
  religion: "catholic",
  occupation: "student",

  languageOrDialecSpokenAndWritten: ["English", "Tagalog", "Bisaya"],
  personTobeContactedinCaseofEmergency: ["Joy", "Jeany", "Delfin"],
  hisOrherAddressAndTelephone: {
    Joy: ["1760 molave street, new pandan, philippines", "09127872055"],
    Jeany: ["1760 molave street, new pandan, canada", "09317348750"],
    Delfin: ["1760 molave street, new pandan, malaysia", "09123456789"],
  },
};

if (personInfo.positionDesired === "web developer") {
  personInfo.positionDesired = "Web Developer";
}

if (personInfo.date === "05-20-2022") {
  personInfo.date = "May 20, 2022";
}

if (personInfo.name === "jeffern malinao") {
  personInfo.name = "Jeffern Dulla Malinao";
}

if (personInfo.gender === "male") {
  personInfo.gender = "Male";
}

if (personInfo.dateofBirth === "04-02-1997") {
  personInfo.dateofBirth = "April 2, 1997";
}

if (personInfo.birthofPlace === "tagum city, philippines") {
  personInfo.birthofPlace = "Tagum City, Philippines";
}

if (personInfo.civilStatus === "single") {
  personInfo.civilStatus = "Single";
}

if (personInfo.citizenship === "filipino") {
  personInfo.citizenship = "Filipino";
}

if (personInfo.religion === "catholic") {
  personInfo.religion = "Catholic";
}

if (personInfo.occupation === "student") {
  personInfo.occupation = "Student";
}

const {
  positionDesired,
  date,
  name,
  gender,
  cityAddress,
  provincialAddress,
  telephone,
  cellphone,
  eMailAddress,
  dateofBirth,
  birthofPlace,
  civilStatus,
  citizenship,
  height,
  weight,
  religion,
  occupation,
} = personInfo;

console.log(
  `Position Desired: ${personInfo.positionDesired} \nDate: ${date} \nName: ${name} \nGender: ${gender} \nCity Address: ${cityAddress} \nProvincial Address: ${provincialAddress} \nTelephone: ${telephone} \nCellphone: ${cellphone} \nE-mail Address: ${eMailAddress} \nDate of Birth: ${dateofBirth} \nBirth of Place: ${birthofPlace} \nCivil Status: ${civilStatus} \nCitizenship: ${citizenship} \nHeight: ${height} \nWeight: ${weight} \nReligion: ${religion} \nOccupation: ${occupation}`
);

const personResult = `Position Desired: ${personInfo.positionDesired} \nDate: ${date} \nName: ${name} \nGender: ${gender} \nCity Address: ${cityAddress} \nProvincial Address: ${provincialAddress} \nTelephone: ${telephone} \nCellphone: ${cellphone} \nE-mail Address: ${eMailAddress} \nDate of Birth: ${dateofBirth} \nBirth of Place: ${birthofPlace} \nCivil Status: ${civilStatus} \nCitizenship: ${citizenship} \nHeight: ${height} \nWeight: ${weight} \nReligion: ${religion} \nOccupation: ${occupation}`;

const result = document.querySelector('.person-info p');
result.innerHTML = personResult;